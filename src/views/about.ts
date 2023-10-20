import abstractView from "./abstract-view";

export default class extends abstractView {
  constructor() {
    super();
    this.setTitle("About")
  }

  async getHtml() {
    return `
      <div class="container pt-3 align-items-center">
        <section>
            <h2>Our Mission</h2>
            <p>We are passionate gamers who believe in the power of sharing and celebrating the joy of gaming. Our mission is to provide a platform where gamers can create and share their game collection lists, as well as organizing their pile of shame. We want to connect gamers from around the world and inspire each other with the endless possibilities of gaming.</p>
        </section>
        <section>
            <h2>What We Offer</h2>
            <p>At My Game Collection, you can:</p>
            <ul>
                <li>Create and manage your personal game collection lists.</li>
                <li>Discover and explore other gamers' collections and favorites.</li>
                <li>Store all the games you haven't played yet and brag about your poor game-hording skills</li>
            </ul>
        </section>
        <section>
            <h2>Join Us</h2>
            <p>We invite you to join our community of gamers and start sharing your game collection lists and favorites. Let's celebrate the world of gaming together!</p>
            <p>Sign up now to get started.</p>
        </section>
      </div>
       
    `;

  }

}