import { useState } from "react";
import "./Kalorienrechner.css";

const Kalorienrechner = () => {
  const [koerpergewicht, setKoerpergewicht] = useState<string>("");
  const [koerpergroesse, setKoerpergroesse] = useState<string>("");
  const [alter, setAlter] = useState<string>("");
  const [belastung, setBelastung] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [grundumsatz, setGrundumsatz] = useState<number | null>(null);
  const [gesamtenergieumsatz, setGesamtenergieumsatz] = useState<number | null>(
    null
  );

  const calculateGrundumsatz = () => {
    let grundumsatz = 0;

    if (gender === "male") {
      grundumsatz =
        66.47 +
        13.7 * Number(koerpergewicht) +
        5 * Number(koerpergroesse) -
        6.8 * Number(alter);
    } else if (gender === "female") {
      grundumsatz =
        655.1 +
        9.6 * Number(koerpergewicht) +
        1.8 * Number(koerpergroesse) -
        4.7 * Number(alter);
    }

    setGrundumsatz(grundumsatz);

    if (belastung) {
      const gesamtenergieumsatz = grundumsatz * Number(belastung);
      setGesamtenergieumsatz(gesamtenergieumsatz);
    }
  };

  return (
    <section className="calculator">
      <div className="title-calories">
        <h1>Test your daily Calorie Requirement</h1>
        <p>
          To determine your daily calorie requirement, we need some information
          about your age, gender, weight, height and activity level. Enter this
          information to calculate your individual requirements.
        </p>
      </div>
      <div className="input-container">
        <div className="left">
          <label htmlFor="bodysize">Body size (in cm)</label>
          <br />
          <input
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setKoerpergroesse(event.target.value);
            }}
            type="number"
            name="bodysize"
            id="bodysize"
          />
          <br />
          <label htmlFor="weight">Weight (in kg)</label>
          <br />
          <input
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setKoerpergewicht(event.target.value);
            }}
            type="number"
            name="weight"
            id="weight"
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <br />
          <input
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setAlter(event.target.value);
            }}
            type="number"
            name="age"
            id="age"
          />
          <br />
          <label htmlFor="">Belastung</label>
          <select
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              setBelastung(event.target.value);
            }}
            name=""
            id=""
          >
            <option value=""></option>
            <option value="0.95">Schlafen</option>
            <option value="1.2">Nur Sitzen oder Liegen</option>
            <option value="1.5">
              Ausscließlich sitzende Tätigkeit mit wenig oder keiner körplichen
              Aktivität in der Freizeit, z.B. Büroarbeit
            </option>
            <option value="1.7">
              Sitzende Tätigkeit mit zeitweilig gehender oder sthehender
              Tätigkeit, z.B Studierende, Fließbandarbeitende, Laborfachkräfte,
              Berufkraftfahrende
            </option>
            <option value="1.9">
              Überwiegend gehende oder stehende Tätigkeit z.B. Verkäufer:innen,
              Kellner:innen, Handwerker:innen, Mechaniker:innen
            </option>
            <option value="2.2">
              Körperlich anstrengende brufliche Arbeit
            </option>
          </select>
        </div>
      </div>
      <form>
        <label>
          <input
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setGender(event.target.value);
            }}
            type="radio"
            name="gender"
            value="male"
          />
          Male
        </label>
        <label>
          <input
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setGender(event.target.value);
            }}
            type="radio"
            name="gender"
            value="female"
          />
          Female
        </label>
      </form>
      <button onClick={calculateGrundumsatz} className="calculate-button">Calculate</button>
      <table>
        <tr>
          <th></th>
          <th>kcal</th>
          <th>kj</th>
        </tr>
        <tr>
          <td>Basal Metabolic Rate</td>
          <td>{grundumsatz?.toFixed(2)}</td>
          <td>{grundumsatz && (grundumsatz * 4.184).toFixed(2)}</td>
        </tr>
        <tr>
          <td>Total Daily Energy Expenditure</td>
          <td>{gesamtenergieumsatz?.toFixed(2)}</td>
          <td>
            {gesamtenergieumsatz && (gesamtenergieumsatz * 4.184).toFixed(2)}
          </td>
        </tr>
      </table>
    </section>
  );
};

export default Kalorienrechner;
