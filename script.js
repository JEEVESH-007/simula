const dataset = {
    proxima: { 
        name: "Proxima Centauri b", 
        sy_dist: 1.30,      // Distance (Parsecs)
        pl_masse: 1.07,     // Planet Mass (Earth Masses)
        pl_rade: 1.03,      // Planet Radius (Earth Radii)
        pl_orbper: 11.18,   // Orbital Period (Days)
        pl_eqt: 234,        // Equilibrium Temp (Kelvin)
        st_teff: 3050,      // Stellar Temp (Kelvin)
        st_lum: -2.82,      // Stellar Luminosity (log L_sun)
        lambda: 0.08        // Flare Decay Factor
    },
    trappist: { 
        name: "TRAPPIST-1 e", 
        sy_dist: 12.10, 
        pl_masse: 0.69, 
        pl_rade: 0.92, 
        pl_orbper: 6.10, 
        pl_eqt: 249, 
        st_teff: 2566, 
        st_lum: -3.22, 
        lambda: 0.02 
    }
};

function runSimulation(key) {
    const p = dataset[key];
    
    // Core Physics: Gravity = Mass / (Radius squared)
    const gravity = (p.pl_masse / Math.pow(p.pl_rade, 2)).toFixed(2);
    
    // Stochastic Risk Math: P_survival = e^(-lambda * 10 days)
    const survivalChance = Math.exp(-p.lambda * 10);
    const survivalPercentage = Math.round(survivalChance * 100);

    // Update the visual dashboard display with EVERY parameter
    document.getElementById("planet-name").innerText = p.name;
    document.getElementById("m-dist").innerText = p.sy_dist;
    document.getElementById("m-grav").innerText = gravity;
    document.getElementById("m-period").innerText = p.pl_orbper;
    document.getElementById("m-temp").innerText = p.pl_eqt;
    document.getElementById("m-steff").innerText = p.st_teff;
    document.getElementById("m-slum").innerText = p.st_lum;
    
    const bar = document.getElementById("survival-bar");
    bar.style.width = survivalPercentage + "%";
    bar.style.backgroundColor = survivalPercentage > 60 ? "#22c55e" : "#ef4444";
    
    document.getElementById("survival-text").innerText = `Vessel has a ${survivalPercentage}% chance of surviving localized stellar flares over a standard 10-day operational orbit.`;
    document.getElementById("telemetry").style.display = "block";
}
