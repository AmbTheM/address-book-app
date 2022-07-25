const url = "https://randomuser.me/api/?results=1000";
async function CallAPI(nationality, gender) {
  const response = await fetch(url);
  const results = await response.json();
  return results;
}

export default CallAPI;
