import Coffee from '../models/Coffee.js';
import mongoose from 'mongoose';

// Default mock data for when MongoDB is disconnected or seeding
export const defaultCoffees = [
  {
    _id: '65c8f1011111111111111111',
    name: 'House No. 01',
    origin: 'Colombia',
    roast: 'Medium',
    price: 699,
    tagline: 'Signature Everyday Roast',
    description: 'Our flagship specialty roast. Carefully washed Caturra beans from Huila with a rich chocolate base and smooth caramel finish.',
    flavorNotes: ['Chocolate', 'Caramel', 'Toasted Almond'],
    image: '/images/house blend.png',
    brewMethods: ['Pour Over', 'Espresso', 'Drip'],
    isFeatured: true,
    createdAt: new Date().toISOString(),
  },
  {
    _id: '65c8f1022222222222222222',
    name: 'Daybreak',
    origin: 'Ethiopia',
    roast: 'Light',
    price: 799,
    tagline: 'Vibrant & Floral',
    description: 'Heirloom Ethiopian beans grown at 2,000 meters in Yirgacheffe. High acidity with delicate jasmine aroma and bright citrus crispness.',
    flavorNotes: ['Citrus', 'Honey', 'Jasmine'],
    image: '/images/single origin.png',
    brewMethods: ['Pour Over', 'Aeropress', 'Cold Brew'],
    isFeatured: true,
    createdAt: new Date().toISOString(),
  },
  {
    _id: '65c8f1033333333333333333',
    name: 'After Hours',
    origin: 'Brazil',
    roast: 'Dark',
    price: 749,
    tagline: 'Deep & Velvety',
    description: 'Natural process Yellow Bourbon beans from Sul de Minas. Heavy body, dense dark cocoa undertones, and toasted hazelnut notes.',
    flavorNotes: ['Cocoa', 'Hazelnut', 'Brown Sugar'],
    image: '/images/dark blend.png',
    brewMethods: ['Espresso', 'French Press', 'Moka Pot'],
    isFeatured: true,
    createdAt: new Date().toISOString(),
  },
  {
    _id: '65c8f1044444444444444444',
    name: 'Velvet Bloom',
    origin: 'Guatemala',
    roast: 'Medium',
    price: 729,
    tagline: 'Sweet & Balanced',
    description: 'Shade-grown Bourbon beans from the volcanic soil of Antigua. Exceptionally balanced cup with honey sweetness and crisp green apple.',
    flavorNotes: ['Honey', 'Apple', 'Vanilla'],
    image: '/images/mocha blend.png',
    brewMethods: ['Pour Over', 'French Press', 'Espresso'],
    isFeatured: false,
    createdAt: new Date().toISOString(),
  },
];

// @desc    Get all coffees
// @route   GET /api/coffee
export const getAllCoffees = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const coffees = await Coffee.find().sort({ createdAt: -1 });
      if (coffees.length > 0) {
        return res.status(200).json({
          success: true,
          count: coffees.length,
          source: 'database',
          data: coffees,
        });
      }
    }
    // Fallback if DB is disconnected or empty
    return res.status(200).json({
      success: true,
      count: defaultCoffees.length,
      source: 'fallback',
      data: defaultCoffees,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single coffee by ID
// @route   GET /api/coffee/:id
export const getCoffeeById = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (mongoose.connection.readyState === 1 && mongoose.Types.ObjectId.isValid(id)) {
      const coffee = await Coffee.findById(id);
      if (coffee) {
        return res.status(200).json({
          success: true,
          data: coffee,
        });
      }
    }

    // Check fallback
    const fallbackItem = defaultCoffees.find((item) => item._id === id);
    if (fallbackItem) {
      return res.status(200).json({
        success: true,
        data: fallbackItem,
      });
    }

    return res.status(404).json({
      success: false,
      message: `Coffee product not found with id: ${id}`,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create new coffee product
// @route   POST /api/coffee
export const createCoffee = async (req, res, next) => {
  try {
    const { name, origin, roast, price, description, flavorNotes, image, brewMethods, tagline, isFeatured } = req.body;

    if (!name || !origin || !roast || !price || !description || !flavorNotes) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields (name, origin, roast, price, description, flavorNotes)',
      });
    }

    if (mongoose.connection.readyState === 1) {
      const newCoffee = await Coffee.create({
        name,
        origin,
        roast,
        price,
        description,
        flavorNotes,
        image,
        brewMethods,
        tagline,
        isFeatured,
      });

      return res.status(201).json({
        success: true,
        data: newCoffee,
      });
    } else {
      return res.status(503).json({
        success: false,
        message: 'Database connection unavailable. Cannot save new product.',
      });
    }
  } catch (error) {
    next(error);
  }
};
