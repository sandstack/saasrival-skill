# SaaSRival Skill for Claude Code

Turn competitor intelligence into a shippable build plan — inside Claude Code.

## Install

```bash
npx saasrival-skill install
```

Asks whether you want project-level or global install, then sets everything up. That's it.

**Manual alternatives:**

```bash
# Project only
curl -o CLAUDE.md https://raw.githubusercontent.com/sandstack/saasrival-skill/master/CLAUDE.md

# Global (every project)
curl https://raw.githubusercontent.com/sandstack/saasrival-skill/master/CLAUDE.md >> ~/.claude/CLAUDE.md
```

## What it does

1. Download a `.saasrival` keyfile from [SaaSRival](https://saasrival.com) for any brand
2. Drop it into your project folder
3. Run `claude` — it detects the file, loads the brand's competitive intelligence, and greets you
4. Ask for anything: teardown, PRD, schema, marketing copy, security review, launch checklist

No API calls. No configuration. Works fully offline.

## Usage

```bash
mkdir my-app && cd my-app

# Copy your downloaded keyfile into the folder
cp ~/Downloads/opal.saasrival .

# Start Claude Code
claude

# Claude will detect the file and greet you:
# "SaaSRival: Found Opal — productivity/ios, ~$246K/mo, 50 active ads on facebook. Ready to build. What would you like to do?"
```

From there, ask for whatever you need:

- `"Run a full competitor teardown"`
- `"Write the PRD for a 2-week MVP"`
- `"Design the Supabase schema with RLS"`
- `"Give me 5 ad angles based on their top performers"`
- `"Generate the launch checklist"`

## Get keyfiles

Download brand keyfiles at [saasrival.com](https://saasrival.com). Each keyfile contains verified data: MRR signal, ad copy, audience demographics, tech stack, team size, and inferred vulnerabilities.

## Example keyfile

See [`examples/sample.saasrival`](examples/sample.saasrival) for the full schema.

## Security

The skill operates entirely locally. It reads only the `.saasrival` file you provide. It makes no network requests and sends no data anywhere.
