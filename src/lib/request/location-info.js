export const getLocationInfo = ({ point, setData }) => {
  fetch(
    `https://api.unl.global/v2/geocode/reverse?location={"Point":[${point.lng}, ${point.lat}]}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-unl-api-key": "zkXmSvu61bOVJHkybWqJfOqOMRl2lhEl",
        "x-unl-vpm-id": "e43daa6c-820d-4772-91e5-f99bebc35930",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    });
};
