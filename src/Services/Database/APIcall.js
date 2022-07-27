const url = "https://randomuser.me/api/?results=50";
async function CallAPI(nationalitylist, gender) {
  const nationalityquery = nationalitylist?.map((item) => {
    let temp = "";
    temp += item + ",";
    return temp;
  });
  const response = await fetch(
    url + "&nat=" + nationalityquery + "&gender=" + gender
  );
  const results = await response.json();
  return results;
}

export default CallAPI;
