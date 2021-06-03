function truncate(str, maxlength) {
  if (str.length > maxlength) {
    const maxStr = str.slice(0, maxlength-1);
      return maxStr + "…";
    } else {
       return str;
    }
  }

