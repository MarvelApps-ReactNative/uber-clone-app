const convertMinsToHrsMins = (mins:any) => {
    let h:any = Math.floor(mins / 60);
    let m:any = mins % 60;
     h = String(h).padStart(2, '0')
     m = String(m).padStart(2, '0')
    return `${h}:${m}`;
  }


  export default convertMinsToHrsMins