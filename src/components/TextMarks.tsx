const PLACES = new Set([
  "台湾",
  "深圳",
  "香港",
  "Taiwan",
  "Shenzhen",
  "Hong Kong",
]);

export function AccentAI({ text }: { text: string }) {
  const parts = text.split(/(AI)/g);
  return (
    <>
      {parts.map((part, index) =>
        part === "AI" ? (
          <span key={`${part}-${index}`} className="text-accent">
            {part}
          </span>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        ),
      )}
    </>
  );
}

export function PlaceMark({ text }: { text: string }) {
  const parts = text.split(/(台湾|深圳|香港|Taiwan|Shenzhen|Hong Kong)/g);
  return (
    <>
      {parts.map((part, index) =>
        PLACES.has(part) ? (
          <span key={`${part}-${index}`} className="text-accent">
            {part}
          </span>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        ),
      )}
    </>
  );
}
