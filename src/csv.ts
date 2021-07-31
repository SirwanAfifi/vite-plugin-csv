export function loadCSV(code: string) {
  const csv = code.split(/\r\n|\n|\r/);
  const records: unknown[] = [];
  const headers = csv.slice(0)[0].split(",");
  const rows = csv.slice(1).filter((row) => row);

  for (let row of rows) {
    const record = row.split(",");
    if (record.every((item) => !item)) continue;
    records.push(record);
  }

  return records.reduce((prev: unknown[], next: unknown) => {
    const entry = {};
    headers.forEach((h, i) => {
      (entry as Record<string, string>)[h] = (next as Record<string, string>)[
        i
      ];
    });
    prev.push(entry);
    return prev;
  }, []);
}
