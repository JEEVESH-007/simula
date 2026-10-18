const dataset = {
    proxima: { name: "Proxima Centauri b", dist: 1.30, mass: 1.07, radius: 1.03, period: 11.18, lambda: 0.08 },
    trappist: { name: "TRAPPIST-1 e", dist: 12.10, mass: 0.69, radius: 0.92, period: 6.10, lambda: 0.02 }
};

function runSimulation(key) {
    const p = dataset[key];
    
    // Core Physics: Gravity = Mass / (Radius squared)
    const gravity = (p.mass / Math.pow(p.radius, 2)).toFixed(2);
    
    // Stochastic Risk Math: P_survival = e^(-lambda * 10 days)
    const survivalChance = Math.exp(-p.lambda * 10);
    const survivalPercentage = Math.round(survivalChance * 100);

    // Update visual dashboard displays
    document.getElementById("planet-name").innerText = p.name;
    document.getElementById("m-dist").innerText = p.dist;
    document.getElementById("m-grav").innerText = gravity;
    document.getElementById("m-period").innerText = p.period;
    
    const bar = document.getElementById("survival-bar");
    bar.style.width = survivalPercentage + "%";
    bar.style.backgroundColor = survivalPercentage > 60 ? "#22c55e" : "#ef4444";
    
    document.getElementById("survival-text").innerText = `Vessel has a ${survivalPercentage}% chance of surviving localized stellar flares over a standard 10-day operational orbit.`;
    document.getElementById("telemetry").style.display = "block";
}
