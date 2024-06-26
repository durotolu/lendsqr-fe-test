export default function formatDate(dateString: string): string {
  const date = new Date(dateString);
  
  const months: string[] = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  
  const day: number = date.getDate();
  const month: string = months[date.getMonth()];
  const year: number = date.getFullYear();
  
  return `${month} ${day}, ${year}`;
}
