async function evaluate() {
  const player = document.getElementById("player").value;
  const killLine = parseFloat(document.getElementById("killLine").value);
  const hsLine = parseFloat(document.getElementById("hsLine").value);
  const salary = parseFloat(document.getElementById("salary").value);

  const res = await fetch("https://backendpy-zip-production-4aed.up.railway.app/evaluate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      player_name: player,
      kill_line: killLine,
      hs_line: hsLine,
      salary: salary,
      map_count: 2
    }),
  });

  const data = await res.json();
  document.getElementById("output").innerText = JSON.stringify(data, null, 2);
}
