const prefix = (str) => {
    let pre = str.replace(/\s+/g, " ").trim();
    return pre.split(" ").map((word) => word[0].toUpperCase()).join("")
  }
