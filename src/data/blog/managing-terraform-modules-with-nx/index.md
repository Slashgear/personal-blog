---
title: "Managing Terraform Modules with Nx Monorepo"
description: Explore how to leverage Nx to efficiently manage and organize Terraform modules in a monorepo setup, improving code reusability and team collaboration.
pubDatetime: 2025-11-01
language: en
ogImage: ./cover.jpg
tags:
  - terraform
  - nx
  - monorepo
  - devops
  - infrastructure
---

## Table of contents

## Introduction

Managing infrastructure as code at scale is challenging. When your organization grows beyond a handful of Terraform modules, you quickly encounter familiar problems: code duplication, inconsistent testing practices, unclear dependencies between modules, and the eternal question of whether to use a monorepo or split everything into separate repositories.

If you've worked with Terraform in a team environment, you've probably faced these pain points:
- Running `terraform fmt` and `terraform validate` across dozens of modules manually
- Uncertainty about which modules are affected by a change
- Difficulty enforcing consistent standards across all modules
- Time wasted running tests on unaffected modules in CI/CD
- The challenge of managing dependencies between related modules

What if you could leverage the same powerful tooling that frontend teams use to manage their monorepos? Enter **Nx** - a smart build system that can transform how you manage Terraform modules.

## The Challenge of Managing Terraform Modules at Scale

### The Multi-Repo Dilemma

Many organizations start with separate Git repositories for each Terraform module. This approach seems clean at first - each module has its own versioning, CI/CD pipeline, and release cycle. However, as your infrastructure grows, this strategy reveals its weaknesses:

- **Versioning Hell**: When Module A depends on Module B, you need to carefully manage version pinning. Update Module B? Now you need to update Module A's version constraint, test it, and release a new version.
- **Cross-Module Changes**: A breaking change that affects multiple modules requires coordinating PRs across multiple repositories, each with its own review and merge timeline.
- **Inconsistent Tooling**: Each repository might have different CI configurations, different testing approaches, or even different versions of tools like `tflint` or `terraform-docs`.

### The Monorepo Challenges

Moving to a monorepo solves some problems but creates others:

- **Build Times**: Without smart tooling, CI runs tests on ALL modules even when you only changed one.
- **Dependency Tracking**: How do you know which modules depend on each other? Manual documentation? Good luck keeping that up to date.
- **Task Orchestration**: Running `terraform fmt` across 50 modules means writing bash scripts that find all the directories, loop through them, and aggregate results.
- **Developer Experience**: Developers need clear visibility into what's affected by their changes and confidence that they're running the right tests.

The traditional approach to Terraform module management leaves teams choosing between the coordination overhead of multi-repo or the inefficiency of a naive monorepo.

## Why Nx for Terraform Modules?

[Nx](https://nx.dev) is a smart build system originally designed for JavaScript/TypeScript monorepos, but it's fundamentally **language-agnostic**. At its core, Nx provides exactly what we need for managing Terraform modules:

### 1. Intelligent Task Orchestration

Nx understands your project graph - which modules depend on which. When you run a task, Nx:
- Only executes tasks on **affected** projects based on your git diff
- Runs tasks in the **correct order** based on dependencies
- Executes independent tasks in **parallel** to maximize speed

For Terraform, this means running `terraform validate` only on the modules that changed, and their dependents - not the entire monorepo.

### 2. Dependency Graph Visualization

Run `nx graph` and see a visual representation of how your modules relate to each other. This is invaluable for understanding impact and planning refactors.

### 3. Code Generation

Nx generators let you scaffold new modules with consistent structure. Want a new Terraform module with the right directory structure, a `project.json`, tests, and documentation? One command.

### 4. Consistent Tooling Across Projects

Define tasks once, inherit them across all modules. Every module gets `fmt`, `validate`, `lint`, and `test` targets without copying configuration files everywhere.

The beauty of Nx is that it doesn't change how you write Terraform - it enhances how you **manage** Terraform modules at scale.

## Setting Up an Nx Workspace for Terraform

Let's build a practical Nx workspace for managing Terraform modules. I'll walk you through the setup step by step.

### Creating the Workspace

First, create a new Nx workspace:

```bash
npx create-nx-workspace@latest terraform-modules --preset=npm
cd terraform-modules
```

Choose the "npm" preset - we're not building a JavaScript application, we just want Nx's task orchestration capabilities.

### Workspace Structure

Here's a recommended structure for organizing Terraform modules:

```
terraform-modules/
├── nx.json
├── package.json
├── modules/
│   ├── scw-vpc/
│   │   ├── project.json
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   ├── outputs.tf
│   │   └── README.md
│   ├── scw-k8s/
│   │   ├── project.json
│   │   ├── main.tf
│   │   ├── variables.tf
│   │   ├── outputs.tf
│   │   └── README.md
│   └── scw-database/
│       ├── project.json
│       └── ...
└── tools/
    └── scripts/
```

Each Terraform module lives in `modules/` and has its own `project.json` file where we define Nx tasks.

### Configuring Nx for Terraform Projects

The `project.json` file is where Nx magic happens. Here's an example for the `scw-vpc` module:

```json
{
  "name": "scw-vpc",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "projectType": "library",
  "sourceRoot": "modules/scw-vpc",
  "targets": {
    "fmt": {
      "executor": "nx:run-commands",
      "options": {
        "command": "terraform fmt -check",
        "cwd": "modules/scw-vpc"
      }
    },
    "fmt-fix": {
      "executor": "nx:run-commands",
      "options": {
        "command": "terraform fmt",
        "cwd": "modules/scw-vpc"
      }
    },
    "validate": {
      "executor": "nx:run-commands",
      "options": {
        "commands": [
          "terraform init -backend=false",
          "terraform validate"
        ],
        "cwd": "modules/scw-vpc",
        "parallel": false
      }
    },
    "lint": {
      "executor": "nx:run-commands",
      "options": {
        "command": "tflint",
        "cwd": "modules/scw-vpc"
      }
    },
    "docs": {
      "executor": "nx:run-commands",
      "options": {
        "command": "terraform-docs markdown . > README.md",
        "cwd": "modules/scw-vpc"
      }
    }
  },
  "tags": ["type:terraform", "cloud:scaleway", "layer:network"]
}
```

The `nx:run-commands` executor lets us run any shell command - perfect for Terraform CLI commands.

Now you can run:
```bash
nx fmt scw-vpc          # Check formatting
nx validate scw-vpc     # Validate configuration
nx lint scw-vpc         # Run tflint
nx run-many -t validate # Run validate on all modules
```

## Managing Dependencies Between Terraform Modules

One of Nx's most powerful features is its understanding of dependencies. But Terraform modules don't use `import` statements like JavaScript - so how does Nx know about dependencies?

### Implicit Dependencies

Nx can infer dependencies by analyzing your Terraform code. When `scw-k8s` module references the `scw-vpc` module with a relative path:

```hcl
module "vpc" {
  source = "../scw-vpc"
  # ...
}
```

Nx can detect this relationship. Configure implicit dependencies in your root `nx.json`:

```json
{
  "pluginsConfig": {
    "@nx/dependency-checks": {
      "checkVersionMismatch": false
    }
  },
  "targetDefaults": {
    "validate": {
      "dependsOn": ["^validate"]
    }
  }
}
```

### Explicit Dependencies

For more control, explicitly declare dependencies in your `project.json`:

```json
{
  "name": "scw-k8s",
  "implicitDependencies": ["scw-vpc"],
  "targets": {
    // ...
  }
}
```

This tells Nx that `scw-k8s` depends on `scw-vpc`. Now when you run:

```bash
nx validate scw-k8s
```

Nx will first validate `scw-vpc`, then `scw-k8s`. And more importantly:

```bash
nx affected -t validate
```

If you change `scw-vpc`, Nx knows that `scw-k8s` is affected and will run validation on both modules.

### Visualizing the Graph

See your entire module ecosystem:

```bash
nx graph
```

This opens an interactive browser view showing all your modules and their relationships. It's incredibly useful for:
- Onboarding new team members
- Planning large refactors
- Understanding blast radius of changes
- Identifying circular dependencies

## Building a Task Pipeline

Nx really shines when you build task pipelines that automatically run in the correct order. Let's create a comprehensive set of targets for our Terraform modules.

### Defining Target Dependencies

In your `nx.json`, use `targetDefaults` to create a pipeline:

```json
{
  "targetDefaults": {
    "fmt": {
      "dependsOn": []
    },
    "validate": {
      "dependsOn": ["^validate", "fmt"]
    },
    "lint": {
      "dependsOn": ["validate"]
    },
    "security": {
      "dependsOn": ["lint"]
    }
  }
}
```

The `^` prefix means "dependencies of dependencies". When you run `nx security scw-k8s`:
1. Nx validates all modules that `scw-k8s` depends on
2. Then formats `scw-k8s`
3. Then validates `scw-k8s`
4. Then lints `scw-k8s`
5. Finally runs security scans on `scw-k8s`

All automatically, in parallel where possible.

### Common Targets

Here's a complete `project.json` with all the targets you'll typically need:

```json
{
  "name": "scw-vpc",
  "$schema": "../../node_modules/nx/schemas/project-schema.json",
  "projectType": "library",
  "sourceRoot": "modules/scw-vpc",
  "targets": {
    "fmt": {
      "executor": "nx:run-commands",
      "options": {
        "command": "terraform fmt -check",
        "cwd": "modules/scw-vpc"
      }
    },
    "fmt-fix": {
      "executor": "nx:run-commands",
      "options": {
        "command": "terraform fmt",
        "cwd": "modules/scw-vpc"
      }
    },
    "validate": {
      "executor": "nx:run-commands",
      "options": {
        "commands": [
          "terraform init -backend=false",
          "terraform validate"
        ],
        "cwd": "modules/scw-vpc",
        "parallel": false
      }
    },
    "lint": {
      "executor": "nx:run-commands",
      "options": {
        "commands": [
          "tflint --init",
          "tflint"
        ],
        "cwd": "modules/scw-vpc",
        "parallel": false
      }
    },
    "security": {
      "executor": "nx:run-commands",
      "options": {
        "command": "checkov -d .",
        "cwd": "modules/scw-vpc"
      }
    },
    "docs": {
      "executor": "nx:run-commands",
      "options": {
        "command": "terraform-docs markdown . > README.md",
        "cwd": "modules/scw-vpc"
      }
    }
  },
  "tags": ["type:terraform", "cloud:scaleway", "layer:network"]
}
```

### Running Tasks Across Multiple Projects

```bash
# Run fmt on all modules
nx run-many -t fmt

# Run affected validations based on git changes
nx affected -t validate,lint

# Run tasks in specific order
nx run-many -t fmt,validate,lint,security

# Run on modules with specific tags
nx run-many -t validate --projects=tag:cloud:scaleway
```

## Code Generation and Scaffolding

Manually creating `project.json` files for each new module gets tedious. Nx generators solve this by scaffolding consistent module structures with a single command.

### Creating a Custom Generator

Create a generator in `tools/generators/terraform-module/`:

```javascript
// tools/generators/terraform-module/index.js
const { formatFiles, generateFiles, Tree } = require('@nx/devkit');
const path = require('path');

async function terraformModuleGenerator(tree, schema) {
  const { name, cloud, layer } = schema;
  const projectRoot = `modules/${name}`;

  // Generate files from templates
  generateFiles(
    tree,
    path.join(__dirname, 'files'),
    projectRoot,
    {
      name,
      cloud,
      layer,
      tmpl: ''
    }
  );

  // Update workspace
  const projectConfiguration = {
    name,
    projectType: 'library',
    sourceRoot: projectRoot,
    targets: {
      fmt: { /* ... */ },
      validate: { /* ... */ },
      lint: { /* ... */ },
      test: { /* ... */ }
    },
    tags: [`type:terraform`, `cloud:${cloud}`, `layer:${layer}`]
  };

  addProjectConfiguration(tree, name, projectConfiguration);
  await formatFiles(tree);
}

module.exports = terraformModuleGenerator;
module.exports.schema = {
  properties: {
    name: { type: 'string' },
    cloud: { type: 'string', enum: ['scaleway', 'aws', 'gcp', 'azure'] },
    layer: { type: 'string', enum: ['network', 'compute', 'storage', 'security'] }
  },
  required: ['name', 'cloud', 'layer']
};
```

### Template Files

Create templates in `tools/generators/terraform-module/files/`:

```hcl
# tools/generators/terraform-module/files/main.tf__tmpl__
terraform {
  required_version = ">= 1.0"

  required_providers {
    <%= cloud %> = {
      source  = "hashicorp/<%= cloud %>"
      version = "~> 5.0"
    }
  }
}

# Add your resources here
```

```hcl
# tools/generators/terraform-module/files/variables.tf__tmpl__
variable "name" {
  description = "Name of the <%= name %> module"
  type        = string
}
```

```hcl
# tools/generators/terraform-module/files/outputs.tf__tmpl__
output "id" {
  description = "ID of the created resource"
  value       = ""
}
```

### Using the Generator

Now create new modules consistently:

```bash
nx g @nx/workspace:workspace-generator terraform-module \
  --name=scw-function \
  --cloud=scaleway \
  --layer=compute

# Creates:
# modules/scw-function/
# ├── project.json
# ├── main.tf
# ├── variables.tf
# ├── outputs.tf
# └── README.md
```

Every new module gets the same structure, targets, and tags. No copy-pasting required.

## Testing Strategies

Testing infrastructure code is critical but often overlooked. With Nx, you can build a comprehensive testing pipeline that runs efficiently across all your modules.

### Level 1: Static Analysis

**terraform fmt & validate**
Basic syntax and semantic validation:
```bash
nx run-many -t fmt,validate
```

**tflint**
Catch common mistakes and enforce best practices:
```json
{
  "lint": {
    "executor": "nx:run-commands",
    "options": {
      "commands": [
        "tflint --init",
        "tflint --format compact"
      ],
      "cwd": "modules/scw-vpc",
      "parallel": false
    }
  }
}
```

**checkov**
Security and compliance scanning:
```bash
nx run-many -t security  # Runs checkov on all modules
```

### Orchestrating Static Analysis with Nx

The magic happens when you combine Nx's dependency graph with your validation pipeline:

```bash
# Only validate modules affected by your changes
nx affected -t validate,lint --base=main

# Validate a module and all its dependencies
nx validate scw-k8s --with-deps

# Run security scans in parallel (independent modules)
nx run-many -t security --parallel=3

# Run full quality checks on affected modules
nx affected -t fmt,validate,lint,security --base=main
```

This can reduce CI time from hours to minutes for large infrastructure repos.

## CI/CD Integration

The real power of Nx shows up in CI/CD. Instead of running all checks on all modules, you only run what's needed.

### GitHub Actions Example

```yaml
# .github/workflows/ci.yml
name: CI

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

jobs:
  affected:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0  # Important for nx affected

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Setup Terraform
        uses: hashicorp/setup-terraform@v2
        with:
          terraform_version: 1.6.0

      - name: Install dependencies
        run: npm ci

      - name: Install tflint
        run: |
          curl -s https://raw.githubusercontent.com/terraform-linters/tflint/master/install_linux.sh | bash

      - name: Derive SHAs for affected command
        uses: nrwl/nx-set-shas@v3

      - name: Run affected format check
        run: npx nx affected -t fmt --base=$NX_BASE --head=$NX_HEAD

      - name: Run affected validate
        run: npx nx affected -t validate --base=$NX_BASE --head=$NX_HEAD

      - name: Run affected lint
        run: npx nx affected -t lint --base=$NX_BASE --head=$NX_HEAD --parallel=3

      - name: Run affected security scans
        run: npx nx affected -t security --base=$NX_BASE --head=$NX_HEAD
```

### What This Does

1. **Only checks affected modules**: If you change `scw-vpc`, only `scw-vpc` and modules that depend on it run checks
2. **Parallel execution**: Independent modules run in parallel (configured with `--parallel=3`)
3. **Fast feedback**: Most PRs only touch 1-2 modules, so CI completes in seconds instead of minutes

### GitLab CI Example

```yaml
# .gitlab-ci.yml
stages:
  - validate
  - security

.nx-affected:
  image: node:18
  before_script:
    - npm ci
    - curl -s https://raw.githubusercontent.com/terraform-linters/tflint/master/install_linux.sh | bash
  variables:
    NX_BASE: $CI_MERGE_REQUEST_DIFF_BASE_SHA
    NX_HEAD: $CI_COMMIT_SHA

affected:validate:
  extends: .nx-affected
  stage: validate
  script:
    - npx nx affected -t validate,lint --base=$NX_BASE --head=$NX_HEAD --parallel=3

affected:security:
  extends: .nx-affected
  stage: security
  script:
    - npx nx affected -t security --base=$NX_BASE --head=$NX_HEAD
  only:
    - merge_requests
```

### Results

In a real-world scenario with 30+ Terraform modules:
- **Before Nx**: Every PR ran checks on all 30 modules (~15 min)
- **After Nx**: Most PRs only check 1-3 affected modules (~2 min)
- **Savings**: 87% reduction in CI time

## Managing Releases with Nx

One of the most powerful yet underrated features of Nx is its ability to manage releases in a monorepo. For Terraform modules, proper release management is crucial for versioning, changelog generation, and coordinating changes across dependent modules.

### Using Nx Release

Nx provides a built-in release system that handles versioning, changelog generation, and git tagging automatically.

#### Initial Setup

First, configure Nx Release in your `nx.json`:

```json
{
  "release": {
    "projects": ["modules/*"],
    "projectsRelationship": "independent",
    "version": {
      "generatorOptions": {
        "packageRoot": "{projectRoot}",
        "currentVersionResolver": "git-tag"
      }
    },
    "changelog": {
      "projectChangelogs": {
        "createRelease": "github",
        "file": "{projectRoot}/CHANGELOG.md",
        "renderOptions": {
          "authors": true,
          "commitReferences": true
        }
      }
    },
    "git": {
      "commit": true,
      "tag": true,
      "commitMessage": "chore(release): publish {projectName} {version}"
    }
  }
}
```

### Creating a Release

When you're ready to release modules that have changed:

```bash
# See which modules have changed since last release
nx release --dry-run

# Release only affected modules with automatic version bump
nx release --projects=tag:cloud:scaleway

# Release a specific module with a specific version
nx release scw-vpc --specifier=1.2.0
```

### Automated Semantic Versioning

Nx can automatically determine version bumps based on conventional commits:

```bash
# Patch version (fix: commits)
git commit -m "fix(scw-vpc): correct subnet CIDR calculation"

# Minor version (feat: commits)
git commit -m "feat(scw-k8s): add autoscaling support"

# Major version (BREAKING CHANGE: in commit body)
git commit -m "feat(scw-vpc)!: redesign network architecture

BREAKING CHANGE: VPC module now requires new subnet configuration"

# Run release
nx release --projects=tag:cloud:scaleway --dry-run
# Nx will suggest: scw-vpc: 1.2.3 → 2.0.0, scw-k8s: 1.5.0 → 1.6.0
```

### Changelog Generation

Nx automatically generates changelogs for each module:

```markdown
# modules/scw-vpc/CHANGELOG.md

## 2.0.0 (2025-11-01)

### ⚠ BREAKING CHANGES

* **scw-vpc:** VPC module now requires new subnet configuration

### Features

* **scw-vpc:** redesign network architecture ([a1b2c3d](https://github.com/org/repo/commit/a1b2c3d))

### Authors

- Antoine Caron (@Slashgear)
```

### Release Workflow in CI

Automate releases with GitHub Actions:

```yaml
# .github/workflows/release.yml
name: Release

on:
  push:
    branches: [main]

jobs:
  release:
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: write
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Configure Git
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"

      - name: Release
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          npx nx release --skip-publish
```

### Tagging Strategy

Nx creates git tags for each module release:

```bash
# Tags created by Nx
scw-vpc@2.0.0
scw-k8s@1.6.0
scw-database@1.3.1
```

External consumers can reference specific versions:

```hcl
# Using git tags to reference specific module versions
module "vpc" {
  source = "git::https://github.com/org/terraform-modules.git//modules/scw-vpc?ref=scw-vpc@2.0.0"
}
```

### Independent vs Fixed Versioning

Nx supports two release strategies:

**Independent** (recommended for Terraform modules):
- Each module has its own version
- Modules only bump when they change
- `"projectsRelationship": "independent"`

**Fixed** (useful for tightly coupled modules):
- All modules share the same version
- All versions bump together even if unchanged
- `"projectsRelationship": "fixed"`

### Benefits

- **Automatic versioning**: Based on conventional commits
- **Generated changelogs**: No manual CHANGELOG.md updates
- **Git tagging**: Automatic and consistent
- **Affected awareness**: Only release modules that changed
- **GitHub releases**: Automatic release creation with notes

This makes managing dozens of Terraform modules significantly less painful than manual versioning and tagging.

## Real-World Use Case

Let's walk through a concrete example: a SaaS company managing their Scaleway infrastructure with Nx.

### The Setup

They have the following modules:
- `scw-vpc` - Private network configuration
- `scw-k8s` - Kubernetes Kapsule cluster (depends on vpc)
- `scw-database` - Managed PostgreSQL (depends on vpc)
- `scw-object-storage` - S3-compatible storage
- `scw-registry` - Container registry
- `scw-loadbalancer` - Load balancer (depends on vpc, k8s)
- `scw-monitoring` - Observability stack (depends on k8s)

### The Dependency Graph

```
scw-vpc
  ├── scw-k8s
  │   ├── scw-loadbalancer
  │   └── scw-monitoring
  └── scw-database

scw-object-storage (independent)
scw-registry (independent)
```

Run `nx graph` to visualize this automatically.

### Scenario: Updating the VPC Module

A developer needs to add a new subnet to `scw-vpc`. Here's what happens:

```bash
# Developer makes changes to scw-vpc
git checkout -b feat/add-subnet
# ... edit scw-vpc/main.tf ...

# Check what's affected
nx show projects --affected
# Output: scw-vpc, scw-k8s, scw-database, scw-loadbalancer, scw-monitoring

# Run validation only on affected modules
nx affected -t validate,lint
# Validates: vpc → k8s → database, loadbalancer, monitoring

# Push and CI runs affected checks
# Only the 5 affected modules are validated, not all 7
```

**Result**: Instead of running checks on all modules, only the affected ones run. The independent modules (`scw-object-storage`, `scw-registry`) are skipped entirely.

### Scenario: Adding New Feature to Monitoring

```bash
# Developer updates scw-monitoring
nx show projects --affected
# Output: scw-monitoring (only!)

# CI only validates this one module
nx affected -t validate,lint,security --base=main
```

**Result**: 6 modules skipped, massive time savings.

### The Impact

Before Nx:
- Every PR: validate all 7 modules, run all checks (~20 min)
- Developers waited, context-switched, lost productivity

After Nx:
- Small changes: 1-2 modules affected (~3 min)
- VPC changes: 5 modules affected (~8 min)
- Clear visibility with `nx graph` on what breaks

## Best Practices

After implementing Nx with Terraform modules across multiple teams, here are the lessons learned:

### 1. Use Meaningful Tags

Tags enable powerful filtering. Be strategic:

```json
{
  "tags": [
    "type:terraform",           // All terraform projects
    "cloud:scaleway",           // Cloud provider
    "layer:network",            // Infrastructure layer
    "team:platform",            // Owning team
    "env:multi"                 // Supports multiple envs
  ]
}
```

Then run targeted commands:
```bash
nx run-many -t validate --projects=tag:team:platform
nx run-many -t security --projects=tag:cloud:scaleway
```

### 2. Keep Modules Small and Focused

Each module should do one thing well:
- ✅ Good: `scw-vpc`, `scw-k8s`, `scw-database`
- ❌ Bad: `scw-full-infrastructure`

Small modules = better reusability and easier testing.

### 3. Use Target Dependencies Wisely

Define a clear pipeline in `nx.json`:
```json
{
  "targetDefaults": {
    "validate": {
      "dependsOn": ["^validate", "fmt"]
    },
    "test": {
      "dependsOn": ["^test", "validate", "lint"]
    }
  }
}
```

This ensures tasks run in the right order automatically.

### 4. Document with terraform-docs

Automate documentation generation:
```json
{
  "docs": {
    "executor": "nx:run-commands",
    "options": {
      "command": "terraform-docs markdown table --output-file README.md .",
      "cwd": "modules/scw-vpc"
    }
  }
}
```

Run `nx run-many -t docs` to update all module docs at once.

### 5. Implement Pre-commit Hooks

Use Husky to run quick checks before commits:
```bash
npx husky install
npx husky add .husky/pre-commit "npx nx affected -t fmt-fix,validate"
```

## Limitations and Considerations

Nx is powerful, but it's not a silver bullet. Here are honest tradeoffs to consider:

### Learning Curve

Your team needs to learn:
- Nx concepts (projects, targets, affected commands)
- Node.js/npm basics (even though you're not writing JavaScript)
- How to write `project.json` files

**Mitigation**: Start with 3-5 modules, prove the value, then expand.

### Node.js Dependency

You now need Node.js in your infrastructure workflows. Some teams find this odd.

**Counter-argument**: Node.js is ubiquitous, lightweight, and your CI already has it. The benefits far outweigh this concern.

### State Management Unchanged

Nx doesn't help with:
- Terraform state files
- State locking
- Remote backends
- Workspace management

You still need proper Terraform state hygiene. Nx is purely about **workspace organization** and **task orchestration**.

### Not Ideal for Small Projects

If you have 1-3 Terraform modules that rarely change, Nx is overkill. The overhead isn't worth it.

**Use Nx when**:
- 5+ modules
- Frequent changes
- Multiple team members
- Complex dependencies

### Module Source References

Modules in the monorepo use relative paths:
```hcl
source = "../scw-vpc"
```

External consumers need a different approach:
- Publish to a module registry
- Use git tags with specific refs
- Or keep internal modules internal

### When NOT to Use This Approach

- **Single module projects**: Just use plain Terraform
- **Completely independent modules**: If modules never interact, separate repos might be simpler
- **Team resistant to change**: Cultural fit matters more than technical benefits

Be pragmatic. Nx solves specific problems - make sure you have those problems first.

## Conclusion

Managing Terraform modules at scale doesn't have to be painful. Nx brings proven monorepo practices from the frontend world to infrastructure code, offering:

- **Intelligent task orchestration** - Run only what's affected
- **Dependency awareness** - Understand module relationships automatically
- **Faster CI/CD** - 80%+ time savings in real-world scenarios
- **Better DX** - Consistent tooling, code generation, and clear workflows

The initial setup requires investment - learning Nx concepts, creating `project.json` files, updating CI workflows. But for teams managing 5+ Terraform modules with frequent changes, the ROI is substantial.

Start small: pick 3-5 modules, prove the concept, measure the impact. If it works for you (and it likely will), expand to your full infrastructure codebase.

The future of infrastructure management is smart, graph-aware tooling. Nx brings us closer to that future today.

## Resources

**Nx Documentation**
- [Nx Official Docs](https://nx.dev)
- [nx:run-commands Executor](https://nx.dev/nx-api/nx/executors/run-commands)
- [Creating Custom Generators](https://nx.dev/extending-nx/recipes/local-generators)

**Terraform Tooling**
- [terraform-docs](https://terraform-docs.io/) - Automated documentation generation
- [tflint](https://github.com/terraform-linters/tflint) - Terraform linter
- [checkov](https://www.checkov.io/) - Security and compliance scanning

**Scaleway Provider**
- [Scaleway Terraform Provider](https://registry.terraform.io/providers/scaleway/scaleway/latest/docs)
- [Scaleway Documentation](https://www.scaleway.com/en/docs/)

**Community Examples**
- Join the [Nx Community Discord](https://discord.gg/nx) for discussions

**Further Reading**
- [Monorepo Tools](https://monorepo.tools/) - Comparison of monorepo solutions
- [Terraform Best Practices](https://www.terraform-best-practices.com/)

---

Have you tried managing Terraform with Nx? I'd love to hear about your experience. Find me on [Bluesky](https://bsky.app/profile/slashgear.dev) or [GitHub](https://github.com/Slashgear)!
