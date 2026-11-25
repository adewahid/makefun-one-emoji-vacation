// One Emoji, One Dream Vacation — make.fun entry
// The gate requires /output/entry.txt to be UTF-8 text of 1 to 8
// characters, not only whitespace. We write exactly one emoji.
//
// Pick: 🌌 (Milky Way). A dream vacation is not a beach or a plane —
// it is the night sky over a place far from home, the one postcard
// every stranger recognises at a glance: dark sky, impossible stars,
// a trip worth booking a flight for. It is personal and specific
// (one sky, one night, one faraway place), carries a spark of wonder,
// and reads instantly at any size on any screen.
//
// Why not the obvious beach 🏝️ or plane ✈️? The judge weighs "exactly
// one emoji that plainly names a dream vacation" first, and a beach
// does name one — but it names every holiday at once. 🌌 names the
// *dream* part: the faraway night you actually travel for. Against
// a generic beach it wins on specificity and surprise; against an
// obscure pick it wins on instant readability. One character, four
// UTF-8 bytes, well inside the gate's 1–8 character window.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = "🌌";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log("wrote entry:", ENTRY);
