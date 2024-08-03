 const formatDate = (dateStr:string) => {
    const date = new Date(dateStr);
    if(!dateStr) return ""
    
    // Get the day, month, and year from the date
    const day = String(date.getUTCDate()).padStart(2, '0');
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getUTCFullYear();
    
    // Format as DD/MM/YYYY
    return `${day}/${month}/${year}`;
  };

  export default formatDate;
 
  