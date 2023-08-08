export function getDate(date: string) {
  let started_at, ended_at;
  switch(date) {
    case "day":
      ended_at = new Date();
      started_at = new Date(ended_at.getTime());
      started_at.setDate(ended_at.getDate() - 1);
      started_at = started_at.toISOString();
      ended_at= ended_at.toISOString();
      break
    case "week":
      ended_at = new Date();
      started_at = new Date(ended_at.getTime());
      started_at.setDate(ended_at.getDate() - 7);
      started_at = started_at.toISOString();
      ended_at= ended_at.toISOString();
      break
    case "month":
      ended_at = new Date();
      started_at = new Date(ended_at.getTime());
      started_at.setDate(ended_at.getDate() - 30);
      started_at = started_at.toISOString();
      ended_at= ended_at.toISOString();
      break
  }


  console.log("STARTED_AT:", started_at);
  console.log("ENDED_AT:", ended_at);

  return { started_at, ended_at };

}
