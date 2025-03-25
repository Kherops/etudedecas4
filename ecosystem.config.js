module.exports = {
    apps: [{
      name: "etudedecas4",
      script: "./server.js",
      instances: 3,
      exec_mode: "cluster",
      max_memory_restart: "200M",
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_file: "./logs/combined.log"
    }]
  };
  