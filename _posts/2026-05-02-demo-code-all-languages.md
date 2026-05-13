---
layout: single
title: "Demo: Code in All Languages with Syntax Highlighting"
date: 2026-05-02
categories: [Demo]
tags: [code, python, matlab, c, cpp, java, javascript, html, css, php, syntax-highlight]
author_profile: true
comments: true
read_time: true
toc: true
toc_label: "Languages"
toc_icon: "code"
excerpt: "Syntax-highlighted code blocks for C, C++, Python, MATLAB, Java, JavaScript, HTML, CSS, PHP, and Structured Text — all with copy-paste buttons."
published: false
---

Every code block below has a **Copy** button (top-right corner). Click it to copy the entire snippet.

---

## Python

```python
import numpy as np
import matplotlib.pyplot as plt

# Simulate energy demand signal
t = np.linspace(0, 24, 288)  # 24 hours, 5-min resolution
demand = 500 + 200 * np.sin(2 * np.pi * t / 24) + 50 * np.random.randn(288)

# Peak shaving threshold
threshold = 650

# Apply peak shaving
shaved = np.clip(demand, None, threshold)
battery = demand - shaved  # power absorbed by BESS

plt.figure(figsize=(12, 5))
plt.plot(t, demand, label='Original Demand', alpha=0.7)
plt.plot(t, shaved, label='Shaved Demand', linewidth=2)
plt.axhline(threshold, color='r', linestyle='--', label=f'Threshold = {threshold} kW')
plt.fill_between(t, shaved, demand, alpha=0.3, label='BESS Contribution')
plt.xlabel('Time (hours)')
plt.ylabel('Power (kW)')
plt.title('Peak Shaving with Battery Energy Storage System')
plt.legend()
plt.grid(True, alpha=0.3)
plt.tight_layout()
plt.savefig('peak_shaving.png', dpi=150)
plt.show()
```

---

## MATLAB

```matlab
%% Energy Management System — MATLAB Script
% Deep Q-Network (DQN) based EMS for Community Microgrid

clear; clc; close all;

%% System Parameters
Ts = 1/12;          % Sampling time (5 min = 1/12 hour)
T  = 24;            % Simulation horizon (hours)
N  = T / Ts;        % Number of time steps

% Battery parameters
E_max  = 500;       % kWh — maximum SOC
E_min  = 50;        % kWh — minimum SOC
P_max  = 100;       % kW  — max charge/discharge power
eta_c  = 0.95;      % charging efficiency
eta_d  = 0.95;      % discharging efficiency

% Initialize
SOC   = zeros(1, N+1);
SOC(1) = 250;       % Initial SOC = 50%
P_bess = zeros(1, N);

%% Load and PV Generation Profiles
t = linspace(0, T, N);
P_load = 300 + 150*sin(pi*t/12 - pi/6) + 30*randn(1, N);
P_pv   = max(0, 200*sin(pi*(t-6)/12));  % Solar peak at noon

%% Simple Rule-Based EMS (Baseline)
P_net = P_load - P_pv;  % Net demand

for k = 1:N
    if P_net(k) > 0  % Discharge BESS
        P_bess(k) = min([P_max, P_net(k), (SOC(k) - E_min)/Ts/eta_d]);
    else             % Charge BESS
        P_bess(k) = max([-P_max, P_net(k), -(E_max - SOC(k))*eta_c/Ts]);
    end
    SOC(k+1) = SOC(k) - P_bess(k) * Ts * (P_bess(k) > 0 ? 1/eta_d : eta_c);
end

%% Plot Results
figure('Position', [100 100 1200 600]);
subplot(2,1,1);
plot(t, P_load, 'b', t, P_pv, 'y', t, P_bess, 'r', 'LineWidth', 1.5);
xlabel('Time (hours)'); ylabel('Power (kW)');
title('EMS — Power Dispatch'); grid on;
legend('Load', 'PV Generation', 'BESS Power');

subplot(2,1,2);
plot(t, SOC(1:N)/E_max*100, 'g', 'LineWidth', 2);
yline(E_min/E_max*100, 'r--', 'Min SOC');
yline(E_max/E_max*100, 'b--', 'Max SOC');
xlabel('Time (hours)'); ylabel('SOC (%)');
title('Battery State of Charge'); grid on; ylim([0 110]);
```

---

## C

```c
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

#define N_BATTERY 3
#define DT        0.0833   /* 5-minute sample = 1/12 hour */

typedef struct {
    double soc;       /* State of charge [kWh] */
    double soc_max;
    double soc_min;
    double p_max;     /* Max power [kW] */
    double eta;       /* Round-trip efficiency */
} Battery;

/* Consensus-based SoC balancing */
double consensus_control(Battery *batt, int n, double p_ref) {
    double soc_avg = 0.0;
    for (int i = 0; i < n; i++) soc_avg += batt[i].soc;
    soc_avg /= n;

    double p_total = 0.0;
    for (int i = 0; i < n; i++) {
        double error = batt[i].soc - soc_avg;
        double p_i   = p_ref / n - 0.5 * error;  /* Consensus law */
        /* Clamp to limits */
        p_i = fmax(-batt[i].p_max, fmin(batt[i].p_max, p_i));
        batt[i].soc -= p_i * DT * batt[i].eta;
        batt[i].soc  = fmax(batt[i].soc_min, fmin(batt[i].soc_max, batt[i].soc));
        p_total += p_i;
    }
    return p_total;
}

int main(void) {
    Battery batteries[N_BATTERY] = {
        {150.0, 200.0, 20.0, 50.0, 0.95},
        {100.0, 200.0, 20.0, 50.0, 0.95},
        { 80.0, 200.0, 20.0, 50.0, 0.95},
    };

    printf("%-6s %-8s %-8s %-8s\n", "Step", "SOC_1", "SOC_2", "SOC_3");
    for (int k = 0; k < 50; k++) {
        double p_ref = 60.0;  /* Grid reference power demand */
        consensus_control(batteries, N_BATTERY, p_ref);
        if (k % 5 == 0)
            printf("%-6d %-8.2f %-8.2f %-8.2f\n",
                   k, batteries[0].soc, batteries[1].soc, batteries[2].soc);
    }
    return 0;
}
```

---

## C++

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>
#include <numeric>

class ModbusTCPController {
public:
    ModbusTCPController(double threshold_kw, double bess_capacity_kwh)
        : threshold_(threshold_kw),
          capacity_(bess_capacity_kwh),
          soc_(0.5 * bess_capacity_kwh) {}

    /* Evaluate peak-shaving setpoint for next period */
    double computeSetpoint(const std::vector<double>& forecast) {
        double peak = *std::max_element(forecast.begin(), forecast.end());
        double excess = peak - threshold_;
        if (excess <= 0) return 0.0;
        /* Discharge BESS to cover excess demand */
        double p_cmd = std::min(excess, soc_ / 0.0833);  /* 5-min window */
        soc_ = std::max(0.0, soc_ - p_cmd * 0.0833);
        return p_cmd;
    }

    double getSoC() const { return soc_; }

    void printStatus() const {
        std::cout << "BESS SoC: " << soc_ << " kWh ("
                  << (soc_ / capacity_ * 100.0) << "%)\n";
    }

private:
    double threshold_;
    double capacity_;
    double soc_;
};

int main() {
    ModbusTCPController ctrl(650.0, 500.0);

    /* Simulated 24-hour forecast (hourly, kW) */
    std::vector<double> forecast = {
        400, 380, 360, 370, 420, 510,
        600, 700, 730, 710, 690, 680,
        670, 660, 640, 630, 650, 680,
        720, 710, 660, 580, 500, 430
    };

    std::cout << "Hour  Load(kW)  BESS_Cmd(kW)  SoC(kWh)\n";
    for (size_t i = 0; i < forecast.size(); ++i) {
        double cmd = ctrl.computeSetpoint({forecast[i]});
        std::cout << i << "     " << forecast[i]
                  << "     " << cmd
                  << "     " << ctrl.getSoC() << "\n";
    }
    return 0;
}
```

---

## Java

```java
import java.util.Arrays;

/**
 * Multivariate Deep Learning Solar Irradiance Forecaster
 * Demonstrates a simple feedforward layer in pure Java.
 */
public class SolarForecaster {
    private final double[][] weights;
    private final double[] bias;

    public SolarForecaster(int inputSize, int outputSize) {
        weights = new double[outputSize][inputSize];
        bias    = new double[outputSize];
        // Initialize with small random weights
        for (double[] row : weights)
            for (int j = 0; j < row.length; j++)
                row[j] = (Math.random() - 0.5) * 0.1;
    }

    /** ReLU activation */
    private double relu(double x) { return Math.max(0, x); }

    /** Forward pass */
    public double[] predict(double[] input) {
        double[] output = new double[bias.length];
        for (int i = 0; i < output.length; i++) {
            output[i] = bias[i];
            for (int j = 0; j < input.length; j++)
                output[i] += weights[i][j] * input[j];
            output[i] = relu(output[i]);
        }
        return output;
    }

    public static void main(String[] args) {
        SolarForecaster model = new SolarForecaster(8, 24);
        // Features: GHI, Temp, Humidity, WindSpeed, CloudType, DNI, DHI, ZenithAngle
        double[] features = {600.0, 28.5, 45.0, 3.2, 1.0, 550.0, 80.0, 30.0};
        double[] forecast  = model.predict(features);
        System.out.println("24-hour irradiance forecast (W/m²):");
        System.out.println(Arrays.toString(forecast));
    }
}
```

---

## JavaScript

```javascript
// Real-time Modbus TCP/IP simulation dashboard
class ModbusDashboard {
  constructor(canvasId) {
    this.canvas  = document.getElementById(canvasId);
    this.ctx     = this.canvas.getContext('2d');
    this.data    = { soc: 50, power: 0, load: 600 };
    this.history = [];
  }

  fetchData() {
    // Simulate real-time data from Modbus register
    this.data.load  = 600 + 150 * Math.sin(Date.now() / 10000) + 30 * (Math.random() - 0.5);
    this.data.power = Math.max(0, this.data.load - 650);
    this.data.soc   = Math.max(10, this.data.soc - this.data.power * (5 / 60) / 500 * 100);
    this.history.push({ ...this.data, ts: Date.now() });
    if (this.history.length > 288) this.history.shift();
  }

  draw() {
    const { ctx, canvas } = this;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw SOC gauge
    ctx.beginPath();
    ctx.arc(100, 100, 70, -Math.PI / 2, (-Math.PI / 2) + (2 * Math.PI * this.data.soc / 100));
    ctx.strokeStyle = this.data.soc > 20 ? '#4CAF50' : '#F44336';
    ctx.lineWidth = 12;
    ctx.stroke();

    ctx.fillStyle = '#333';
    ctx.font = 'bold 18px Ubuntu, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${this.data.soc.toFixed(1)}%`, 100, 108);
    ctx.font = '12px Ubuntu, sans-serif';
    ctx.fillText('SOC', 100, 128);
  }

  start() {
    setInterval(() => { this.fetchData(); this.draw(); }, 1000);
  }
}

// Initialize dashboard
const dashboard = new ModbusDashboard('energyCanvas');
dashboard.start();
```

---

## HTML & CSS

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Smart Grid Dashboard</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      font-family: 'Ubuntu', sans-serif;
      background: #1a1a2e;
      color: #e0e0e0;
      min-height: 100vh;
      display: grid;
      place-items: center;
    }

    .dashboard {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      padding: 2rem;
      max-width: 900px;
      width: 100%;
    }

    .card {
      background: #16213e;
      border-radius: 12px;
      padding: 1.5rem;
      border: 1px solid #2d2d4e;
      text-align: center;
      transition: transform 0.2s;
    }

    .card:hover { transform: translateY(-4px); }

    .card__value {
      font-size: 2rem;
      font-weight: 700;
      color: #7eb8f7;
      display: block;
      margin: 0.5rem 0;
    }

    .card__label {
      font-size: 0.8rem;
      color: #a0a0a0;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .progress-bar {
      height: 8px;
      background: #2d2d4e;
      border-radius: 4px;
      margin-top: 0.75rem;
      overflow: hidden;
    }

    .progress-bar__fill {
      height: 100%;
      background: linear-gradient(90deg, #7eb8f7, #4CAF50);
      border-radius: 4px;
      transition: width 0.5s ease;
    }
  </style>
</head>
<body>
  <div class="dashboard">
    <div class="card">
      <span class="card__label">Grid Load</span>
      <span class="card__value">687 kW</span>
      <div class="progress-bar"><div class="progress-bar__fill" style="width:69%"></div></div>
    </div>
    <div class="card">
      <span class="card__label">BESS SOC</span>
      <span class="card__value">73%</span>
      <div class="progress-bar"><div class="progress-bar__fill" style="width:73%"></div></div>
    </div>
    <div class="card">
      <span class="card__label">PV Output</span>
      <span class="card__value">312 kW</span>
      <div class="progress-bar"><div class="progress-bar__fill" style="width:52%"></div></div>
    </div>
  </div>
</body>
</html>
```

---

## PHP

```php
<?php
/**
 * Smart Grid Data API — Modbus TCP/IP Register Reader
 * Fetches real-time BESS and grid data from a Modbus server.
 */

declare(strict_types=1);

class ModbusClient {
    private $socket;
    private string $host;
    private int    $port;
    private int    $transactionId = 0;

    public function __construct(string $host = '192.168.1.100', int $port = 502) {
        $this->host = $host;
        $this->port = $port;
    }

    public function connect(): bool {
        $this->socket = @fsockopen($this->host, $this->port, $errno, $errstr, 3);
        return $this->socket !== false;
    }

    public function readHoldingRegisters(int $startReg, int $count): array {
        $this->transactionId++;
        // Build Modbus TCP PDU
        $pdu = pack('n', $this->transactionId)  // Transaction ID
             . pack('n', 0)                       // Protocol ID
             . pack('n', 6)                       // Length
             . pack('C', 1)                       // Unit ID
             . pack('C', 3)                       // Function code (Read Holding Registers)
             . pack('n', $startReg)               // Start address
             . pack('n', $count);                 // Number of registers

        fwrite($this->socket, $pdu);
        $response = fread($this->socket, 256);
        
        // Parse registers from response
        $data = unpack('n*', substr($response, 9));
        return array_values($data);
    }

    public function disconnect(): void {
        if ($this->socket) fclose($this->socket);
    }
}

// Usage
$client = new ModbusClient('192.168.1.100');

if ($client->connect()) {
    $registers = $client->readHoldingRegisters(0, 10);
    
    $bess_data = [
        'soc_percent'  => $registers[0] / 10.0,
        'power_kw'     => $registers[1] / 10.0,
        'voltage_v'    => $registers[2] / 10.0,
        'current_a'    => $registers[3] / 10.0,
        'temperature_c'=> $registers[4] / 10.0,
    ];

    header('Content-Type: application/json');
    echo json_encode(['status' => 'ok', 'data' => $bess_data, 'timestamp' => time()]);
    
    $client->disconnect();
} else {
    http_response_code(503);
    echo json_encode(['status' => 'error', 'message' => 'Cannot connect to Modbus server']);
}
```

---

## Structured Text (IEC 61131-3)

```
PROGRAM BESSPeakShaving
VAR
    rLoad        : REAL;   (* Grid load in kW *)
    rPV          : REAL;   (* PV generation in kW *)
    rSOC         : REAL;   (* Battery SOC in % *)
    rPowerCmd    : REAL;   (* BESS power command in kW *)
    rThreshold   : REAL := 650.0;  (* Peak shaving threshold kW *)
    rSOC_Min     : REAL := 15.0;   (* Minimum SOC % *)
    rSOC_Max     : REAL := 95.0;   (* Maximum SOC % *)
    rP_Max       : REAL := 100.0;  (* Max BESS power kW *)
    bEnabled     : BOOL := TRUE;
    eState       : INT  := 0;      (* 0=Idle, 1=Discharge, 2=Charge *)
END_VAR

(* ============================================================ *)
(* Main cyclic task — called every 300 ms (5-min period)        *)
(* ============================================================ *)
IF NOT bEnabled THEN
    rPowerCmd := 0.0;
    eState    := 0;
    RETURN;
END_IF

(* Net load after subtracting PV generation *)
VAR_TEMP
    rNetLoad : REAL;
END_VAR
rNetLoad := rLoad - rPV;

IF rNetLoad > rThreshold AND rSOC > rSOC_Min THEN
    (* Peak exceeds threshold — discharge BESS *)
    eState    := 1;
    rPowerCmd := MIN(rNetLoad - rThreshold, rP_Max);
    rPowerCmd := MIN(rPowerCmd, (rSOC - rSOC_Min) * 5.0);  (* Limit by SOC *)

ELSIF rNetLoad < (rThreshold - 50.0) AND rSOC < rSOC_Max THEN
    (* Off-peak — charge BESS from surplus *)
    eState    := 2;
    rPowerCmd := -MIN(rP_Max, (rSOC_Max - rSOC) * 5.0);

ELSE
    eState    := 0;
    rPowerCmd := 0.0;
END_IF

END_PROGRAM
```
