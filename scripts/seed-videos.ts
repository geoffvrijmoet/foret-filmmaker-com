import { connect, disconnect } from 'mongoose';
import { config } from 'dotenv';
import { Video } from '../models/video.ts';

// Load environment variables from .env.local
config({ path: '.env.local' });

// Verify environment variables are loaded
if (!process.env.MONGODB_URI) {
  console.error('Error: MONGODB_URI is not defined in .env.local');
  process.exit(1);
}

const videos = [
  {
    title: "pl-420",
    fullVideoId: "23c2045bd121fa5d6189e856bcd55e5d",
    bannerVideoId: "23c2045bd121fa5d6189e856bcd55e5d",
  },
  {
    title: "galactic-promo",
    fullVideoId: "acf4b48e4df62e2eaed2560567080918",
    bannerVideoId: "7c68b113f3eec17ec1e382ac537150ac",
  },
  {
    title: "tcu-trailer",
    fullVideoId: "68a4fe62af9c19e90b895e7d870cd240",
  },
  {
    title: "hola-nola-30-second-spec-ad",
    fullVideoId: "922f5e4c6c0cdf28d5387918163e7737",
    bannerVideoId: "bc30854d28a15ddfcec40a7f11ea276a",
  },
  {
    title: "d-reel-after-flashback",
    fullVideoId: "c9f680d7245fb575b9bcd32c57e2e9f0",
  },
  {
    title: "in-fine-print",
    fullVideoId: "df56b53a68b24a628dc6515d07faa665",
    bannerVideoId: "30d16fd57f19b9eb370f3c84db4d0943",
  },
  {
    title: "foret-editing-reel",
    fullVideoId: "ce062e0fc20e023bd25efa5115a4b2f4",
  },
  {
    title: "d-reel-scene-29-30",
    fullVideoId: "1462cf37e8d47569ecb340b3d8531d67",
  },
  {
    title: "dissolution",
    fullVideoId: "6ce54b0eefff01e833ed3998c10a6510",
    bannerVideoId: "912a62ec70403f5e094cc7481a867886",
  },
  {
    title: "just-chill-online",
    fullVideoId: "0744a817c95d7aa9a8ece8021dabc470",
    bannerVideoId: "23cce75db8516d7c067fefecbbe21275",
  },
  {
    title: "ccm-promo",
    fullVideoId: "30861c2ad598c2627e62562af01f4c60",
  },
  {
    title: "online-unsweet",
    fullVideoId: "de711d7ac2e1a57cf8a62277915a2f00",
  },
  {
    title: "ims",
    bannerVideoId: "e61daa1212fa3465d8d1e469d947dabf",
  },
  {
    title: "emperor-jones",
    bannerVideoId: "a207bf7c16a42936bbd10032ca94e752",
  },
  {
    title: "ndf",
    bannerVideoId: "026b284572d2de74480b552ed8bba959",
  },
  {
    title: "price",
    bannerVideoId: "b8b2ad036356a995ae041d67d3edaf0b",
  },
  {
    title: "cicadia",
    bannerVideoId: "1ebf0f7457bfc1c7950e9503a167f23f",
  },
  {
    title: "dont-cry",
    bannerVideoId: "1225e1bbc299b9dc1eff3ad27471b7df",
  },
  {
    title: "bite-into-holidays",
    bannerVideoId: "3bff2a07e829841a503b12ab9db5b782",
  },
  {
    title: "boy-next-door",
    bannerVideoId: "b1afb498abca2cbc42b6d123fbd23a57",
  },
  {
    title: "doritos",
    bannerVideoId: "c51ce574c6a2da53455ac2e81da1024a",
  },
];

async function main() {
  try {
    // Connect to the database
    await connect(process.env.MONGODB_URI as string);
    console.log('Connected to database');

    // Clear existing videos
    await Video.deleteMany({});
    console.log('Cleared existing videos');

    // Insert new videos
    const result = await Video.insertMany(videos);
    console.log(`Successfully inserted ${result.length} videos`);

    // Always disconnect when done
    await disconnect();
    console.log('Disconnected from database');
    process.exit(0);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

// Run the script
main(); 