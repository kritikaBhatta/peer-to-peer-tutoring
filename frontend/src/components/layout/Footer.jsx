import Container from "../common/Container";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <Container>

        <div className="grid md:grid-cols-3 gap-10">

          <div>
            <h2 className="text-2xl font-bold mb-4">
              PeerPrep
            </h2>

            <p className="text-gray-400">
              Connecting students with trusted peer tutors.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Home</li>
              <li>Find Tutors</li>
              <li>About</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Contact
            </h3>

            <p className="text-gray-400">
              support@peerprep.com
            </p>
          </div>

        </div>

      </Container>
    </footer>
  );
}