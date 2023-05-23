import "./App.css";

function App() {
  return (
    <div className="App">
      <MobileList />
    </div>
  );
}

function MobileList() {
  const mobiles = [
    {
      name: " Samsung F23 5g",
      picture:
        "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/03/5-photoutils.com_.jpeg?ssl=1&quality=80&w=f",
      brand: "By Samsung",
    },

    {
      name: "Iphone 14 pro",
      picture:
        "https://www.deccanherald.com/sites/dh/files/articleimages/2022/10/11/aiphone14pm-cov-sho-sel-1-1152416-1665475427.jpg",
      brand: "By Apple",
    },
    {
      name: "One plus nord CE3",
      picture:
        "https://www.deccanherald.com/sites/dh/files/articleimages/2023/04/04/opnce3l-cov-sho-sel-1-1206661-1680620459.jpg",
      brand: " By One Plus ",
    },
    {
      name: "POco f5",
      picture:
        "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202305/2-sixteen_nine.png?VersionId=VSABHx7l4gFemHX9LUR1y97Ef8j1REX0&size=690:388",
      brand: "By POCO",
    },
    {
      name: "Vivo x90 5g",
      picture:
        "https://www.deccanherald.com/sites/dh/files/articleimages/2023/04/26/vx905g-cov-sho-sel-1-1213161-1682512819.jpg",
      brand: "BY Vivo",
    },
    {
      name: "REalme Narzo N53 ",
      picture:
        "https://cdn.storifyme.com/accounts/cashify-in-0561312/assets/f-whatsapp-image-2023-05-12-at-111920-am-66431683889631915.jpeg?t=1683901632000",
      brand: "By REalme",
    },
  ];

  return (
    <div className="mobile-list-container">
      {mobiles.map((mobile, index) => (
        <Mobile mobile={mobile} id={index} />
      ))}
    </div>
  );
  function Mobile({ mobile, id }) {
    return (
      <div key={id} className="mobilescontainer">
        <p className="mobilename">{mobile.name}</p>
        <img className="mobilepicture" src={mobile.picture} alt={mobile.name} />
        <p>{mobile.brand}</p>
      </div>
    );
  }
}

export default App;
