import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
          Pain itself is important and achieving greatness often involves enduring it.
          Sometimes, trying to avoid discomfort can make life feel dull and empty.
          Pain can push us away from comfort, but it also helps us grow stronger.
          Hatred and hardship can seem worse than they are, but they are part of the journey.
          At times, even doctors can't stop suffering completely.Not everything that feels good is truly good for us.
          True strength comes from facing challenges, not from always chasing pleasure.
          It's important to understand that life isn’t just about avoiding pain, it’s about learning from it.
          Sometimes we must hold back from easy pleasures to fulfill bigger responsibilities.
          Those who bravely endure difficulties often achieve something meaningful.Pain, struggle, and mistakes are necessary to build character and wisdom.
          We must not fear hardship but, we should see it as part of our duty and growth.
          When we face challenges and push through, we discover who we truly are.
          Running away from problems only delays success. In the end, pain and effort are necessary to become the best version of ourselves.</p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
