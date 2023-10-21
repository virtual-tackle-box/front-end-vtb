export async function postNewCatch(userID = 1, formData) {
  const url = `https://guarded-anchorage-05999-6f151b14a819.herokuapp.com/api/v1/users/${userID}/catches`;

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
      console.log(JSON.stringify(response, null, 2));
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
  } catch (error) {
    console.error('error: ', error);
    return error;
  }
}

export async function getCatches(userID = 1) {
  const url = `https://guarded-anchorage-05999-6f151b14a819.herokuapp.com/api/v1/users/${userID}/catches`;

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

export async function deleteCatch(userID = 1, lureID) {
  const url = `https://guarded-anchorage-05999-6f151b14a819.herokuapp.com/api/v1/users/${userID}/catches/${lureID}`;

  try {
    const response = await fetch(url, { method: 'DELETE' });

    if (response.ok) {
      console.log('response status: ', response.status);
      console.log('Resource deleted successfully.');
    } else {
      console.error('Failed to delete resource.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    return error;
  }
}

export async function getLures(userID = 1) {
  const url = `https://guarded-anchorage-05999-6f151b14a819.herokuapp.com/api/v1/users/${userID}/lures`;

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
  const url = `https://guarded-anchorage-05999-6f151b14a819.herokuapp.com/api/v1/users/${lureID}`;

  try {
    const response = await fetch(url, { method: 'DELETE' });

    if (response.ok) {
      console.log('response status: ', response.status);
      console.log('Resource deleted successfully.');
    } else {
      console.error('Failed to delete resource.');
    }
  } catch (error) {
    console.error('An error occurred:', error);
    return error;
  }
}
