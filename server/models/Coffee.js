import mongoose from 'mongoose';

const coffeeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Coffee name is required'],
      trim: true,
    },
    origin: {
      type: String,
      required: [true, 'Coffee origin is required'],
      trim: true,
    },
    roast: {
      type: String,
      required: [true, 'Roast profile is required'],
      enum: ['Light', 'Medium', 'Dark'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price must be positive'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
    },
    flavorNotes: {
      type: [String],
      required: [true, 'Flavor notes are required'],
    },
    image: {
      type: String,
      default: '/images/hero-bag.png',
    },
    brewMethods: {
      type: [String],
      default: ['Pour Over', 'French Press', 'Espresso'],
    },
    tagline: {
      type: String,
      default: 'Specialty Single Origin',
    },
    isFeatured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Coffee || mongoose.model('Coffee', coffeeSchema);
