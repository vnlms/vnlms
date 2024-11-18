import { connect } from 'mongoose';

const connectDb = async () => {
  try {
    // console.log(process.env.MONGO_URI);
    
    const conn = await connect(process.env.MONGO_URI, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    //   useCreateIndex: true,
    });

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit with failure
  }
};

export default connectDb;
