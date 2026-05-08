import tmsImage from "../assets/projects/tool-monitoring-system.png";
import cardihoopImage from "../assets/projects/cardihoop.jpeg";
import sediImage from "../assets/projects/sedi-dashboard.jpg";
import soilImage from "../assets/projects/soil-monitoring.jpeg";
// import bmiImage from "../assets/projects/bmi-kiosk.jpeg";

export const projects = [
  {
    title: "Tool Monitoring System",
    type: "IoT + Web Dashboard",
    image: tmsImage,
    // demoLink: "https://your-tms-demo.vercel.app",
    description:
      "A QR-based tool borrowing system with Raspberry Pi cabinet control, solenoid locks, admin dashboard, transaction logs, and real-time WebSocket monitoring.",
    tags: ["PHP", "MySQL", "Raspberry Pi", "WebSocket", "IoT"],
  },
  {
    title: "Cardihoop ECG Monitoring",
    type: "Health Tech + Machine Learning",
    image: cardihoopImage,
    // demoLink: "https://jb-cardihoop-demo.vercel.app",
    description:
      "An ECG monitoring platform using ESP32, AD8232, MQTT, Edge Impulse classification, and a web dashboard for athlete health screening.",
    tags: ["ESP32", "MQTT", "Edge Impulse", "Python", "Dashboard"],
  },
  {
    title: "Project SEDI Dashboard",
    type: "Dam Monitoring Platform",
    image: sediImage,
    // demoLink: "https://jb-sedi-demo.vercel.app",
    description:
      "A multi-site monitoring dashboard for geophone, turbidity, and water-level data with alerts, historical charts, and system health indicators.",
    tags: ["IoT", "MQTT", "Charts", "Dashboard", "4G"],
  },
  {
    title: "Soil Monitoring System",
    type: "Agriculture IoT Platform",
    image: soilImage,
    // demoLink: "https://jb-soil-monitoring.vercel.app",
    description:
      "A soil health monitoring system using RS485 sensors, SIM-based MQTT communication, threshold alerts, and web-based data visualization.",
    tags: ["RS485", "MQTT", "PHP", "MySQL", "4G"],
  },
  // {
  //   title: "BMI Monitoring Kiosk",
  //   type: "Embedded Kiosk System",
  //   image: bmiImage,
  //   // demoLink: "https://jb-bmi-kiosk.vercel.app",
  //   description:
  //     "An automated BMI kiosk using ESP32, VL53L1X height sensors, HX711 load cell, Raspberry Pi kiosk interface, and admin dashboard.",
  //   tags: ["ESP32", "Raspberry Pi", "Sensors", "Dashboard"],
  // },
];