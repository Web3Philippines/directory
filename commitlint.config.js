const matchAnyEmojiWithSpaceAfter =
  /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])\s/;
const matchOptionalTicketNumberWithSpaceAfter = /(?:\[(T-\d+)\]\s)?/; // "[T-4605] ", "[T-1]"
const subjectThatDontStartWithBracket = /([^\[].+)/; // "Add tests" but don't allow "[ Add tests"

module.exports = {
  extends: ["@commitlint/config-conventional"],
  parserPreset: {
    parserOpts: {
      headerPattern: new RegExp(
        "^" +
          matchAnyEmojiWithSpaceAfter.source +
          matchOptionalTicketNumberWithSpaceAfter.source +
          subjectThatDontStartWithBracket.source +
          "$",
      ),
      headerCorrespondence: ["emoji", "ticket", "subject"],
    },
  },
  plugins: [
    {
      rules: {
        "header-match-team-pattern": (parsed) => {
          const { emoji, ticket, subject } = parsed;
          if (emoji === null && ticket === null && subject === null) {
            return [
              false,
              "header must be in format '✅ [T-4605] Add tests' or '✅ Add tests'",
            ];
          }
          return [true, ""];
        },
        "explained-emoji-enum": (parsed, _when, emojisObject) => {
          const { emoji } = parsed;
          if (emoji && !Object.keys(emojisObject).includes(emoji)) {
            return [
              false,
              `emoji must be one of:
${Object.keys(emojisObject)
  .map((emojiType) => `${emojiType} - ${emojisObject[emojiType]}`)
  .join("\n")}`,
            ];
          }
          return [true, ""];
        },
      },
    },
  ],
  rules: {
    "header-match-team-pattern": [2, "always"],
    "explained-emoji-enum": [
      2,
      "always",
      {
        "☕️": "CHORE", // This is useful for doing a general chore for the project.
        "✨": "TWEAK", // This is for general changes or updates to the project.
        "📚": "DOCS", // This is for any related update for the docs.
        "📦": "NEW", // This is for any new updates or addition to the project for example new features.
        "🐛": "FIX", // This is useful for any bug fixes.
        "🚀 ": "RELEASE", // This is for maintainers only commit message when committing some updates as finalization.
      },
    ],
  },
};
