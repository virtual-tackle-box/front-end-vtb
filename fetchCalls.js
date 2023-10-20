export async function postNewCatch(userID = 1, formData) {
  const url = `https://083f9844-df93-46cf-bd2d-0d9386929d6d.mock.pstmn.io/api/v1/users/${userID}/catches`;

  const data = {
    catch: formData
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
  } catch (error) {
    console.error('error: ', error);
    return error;
  }
}

export async function getLures(userID = 1) {
  const url = `https://083f9844-df93-46cf-bd2d-0d9386929d6d.mock.pstmn.io/api/v1/users/${userID}/lures`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('error: ', error);
    return error;
  }
}

export async function deleteLure(userID = 1, lureID) {
  const url = `https://083f9844-df93-46cf-bd2d-0d9386929d6d.mock.pstmn.io/api/v1/users/${userID}/lures/${lureID}`;

  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await fetch(url, options);

    if (response.ok) {
      console.log('Resource deleted successfully.');
    } else {
      console.error('Failed to delete resource.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    return error;
  }
}

export async function getCatches(userID = 1) {
  const url = `https://083f9844-df93-46cf-bd2d-0d9386929d6d.mock.pstmn.io/api/v1/users/${userID}/catches`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    console.log(responseData);
    return responseData;
  } catch (error) {
    console.error('error: ', error);
    return error;
  }
}