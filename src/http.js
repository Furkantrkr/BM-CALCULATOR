// Updates BMI data via a PUT request.
// Parameters: data (BMI object)
// Returns: Success message or throws an error.
export async function updateBmiData(data) {
  const response = await fetch('http://localhost:3000/bmi', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data }),
  });
  if (!response.ok) throw new Error('Failed to update BMI data');
  return (await response.json()).message;
}

// Fetches all BMI data via a GET request.
// Returns: Array of BMI data or throws an error.
export async function fetchBmiDatas() {
  const response = await fetch('http://localhost:3000/bmi');
  if (!response.ok) throw new Error('Failed to fetch BMI datas');
  return (await response.json()).datas;
}

// Deletes BMI data by ID using a DELETE request.
// Parameters: itemId (ID of BMI data)
// Returns: Success message or throws an error. Logs the response.
export async function deleteBmiData(itemId) {
  const response = await fetch(`http://localhost:3000/bmi/${itemId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  });
  const resData = await response.json();
  console.log(resData);
  if (!response.ok) throw new Error('Failed to delete BMI data');
  return resData.message;
}
