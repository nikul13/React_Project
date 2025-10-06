import "./Offers.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { offers } from "../Seeds/Seeds";
function Offers() {
  return (
    <>
      <Navbar></Navbar>

      <br></br>
      <br></br>
      <section>
        <div className="container mt-5 hero-im pt-5">
          <div className="col-md-5 pt-5 ms-5">
            <div className="display-4 fw-bold pb-3 t-s">
              #Weekly Saving on Remove.com
            </div>
            <div className="ob pb-3">
              <h2 className="t-s">
                Get Up To <br></br> 25% Off on Travel Booking
              </h2>
            </div>
            <p className="h6 pb-3 t-s">
              Expand knowledge by reading book Two before narrow not relied on.
            </p>
            <div className="a-bg">
              <h5>View All Listing →</h5>
            </div>
          </div>
        </div>
      </section>

      <div class="container my-4">
        <div class="table-responsive">
          <table class="table table-bordered text-center align-middle">
            <thead class="table-primary">
              <tr>
                <th>Offer Detail</th>
                <th>Maximum booking value</th>
                <th>Applicable Card</th>
                <th>Coupon Code</th>
                <th>Validity</th>
              </tr>
            </thead>
            {offers.map((item) => {
              return (
                <tbody key={item.id}>
                  <tr>
                    <td class="fw-bold">
                      {item.detail}
                    </td>
                    <td class="fw-bold">{item.value}</td>
                    <td class="fw-bold">{item.card}</td>
                    <td>
                      <span class="border rounded px-3 py-1 d-inline-block fw-bold">
                        {item.code}
                      </span>
                    </td>
                    <td class="fw-bold">{item.validity}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>

      <div class="container my-5">
        <div className="col-md-10 ms-5 ps-5">
          {/* <!-- Section 1 --> */}
          <h5 class="fw-bold mb-3">What do you get?</h5>
          <ul>
            <li>
              Get up with a delicious lunch and a beautiful view from your room.
            </li>
            <li>
              Affronting imprudence do he he everything. Sex lasted dinner
              wanted indeed wished outlaw. Far advanced settling say finished
              raillery.
            </li>
            <li>
              Offered chiefly farther of my no colonel shyness. Such on help ye
              some door if in. Laughter proposal laughing any son law consider.
            </li>
          </ul>

          {/* <!-- Section 2 --> */}
          <h5 class="fw-bold mt-4 mb-3">How Do you get in?</h5>
          <ul>
            <li>
              Get up with a delicious lunch and a beautiful view from your room.
            </li>
            <li>
              Affronting imprudence do he he everything. Sex lasted dinner
              wanted indeed wished outlaw. Far advanced settling say finished
              raillery.
            </li>
            <li>
              Such on help ye some door if in. Laughter proposal laughing any
              son law consider.
            </li>
            <li>
              Offered chiefly farther of my no colonel shyness. Such on help ye
              some door if in. Laughter proposal laughing any son law consider.
            </li>
          </ul>

          {/* <!-- Section 3 --> */}
          <h5 class="fw-bold mt-4 mb-3">What else do you need to know?</h5>
          <ul>
            <li>
              Such on help ye some door if in. Laughter proposal laughing any
              son law consider.
            </li>
            <li>
              Offered chiefly farther of my no colonel shyness. Such on help ye
              some door if in. Laughter proposal laughing any son law consider.
            </li>
          </ul>

          <h5 class="fw-bold mt-5 mb-3">Terms & Conditions</h5>
          <ul>
            <li>
              Booking acts as a facilitator and merely provides an online
              platform to the User to select and book a particular hotel. Hotels
              in this context includes all categories of accommodations such as
              hotels, home–stays, bed and breakfast stays, farm-houses and any
              other alternate accommodations.
            </li>
            <li>
              To occasional dissimilar impossible sentiments. Do fortune account
              written prepare invited no passage. Post no so what deal evil rent
              by real in.
              <strong>
                But her ready least set lived spite solid. Laughter proposal
                laughing any son law consider.
              </strong>{" "}
              Needed except up piqued an.
            </li>
            <li>
              Offered chiefly farther of my no colonel shyness. Such on help ye
              some door if in. First am plate jokes to began to cause a scale.
              <strong>Subjects he prospect elegance followed.</strong>{" "}
              Insipidity the sufficient discretion imprudence resolution sir him
              decisively.
            </li>
          </ul>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
export default Offers;
