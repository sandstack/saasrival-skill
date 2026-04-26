# SaaSRival Skill for Claude Code

Turn competitor intelligence into a shippable build plan — inside Claude Code.

## What it does

1. You download a `.saasrival` keyfile from [SaaSRival](https://saasrival.com) for any brand
2. Drop it into your project folder
3. Open Claude Code — it reads the file and loads the brand's competitive data automatically
4. Ask it anything: teardown, PRD, schema, marketing copy, security review, launch checklist

No API calls. No setup beyond install. Works fully offline.

## Install — 2 steps

**Option A — project level** (one project only)

Copy `CLAUDE.md` from this repo into your project root:

```bash
curl -o CLAUDE.md https://raw.githubusercontent.com/sandstack/saasrival-skill/master/CLAUDE.md
```

**Option B — global** (works in every project automatically)

Append to your global Claude Code config:

```bash
curl https://raw.githubusercontent.com/sandstack/saasrival-skill/master/CLAUDE.md >> ~/.claude/CLAUDE.md
```

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
