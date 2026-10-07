const Listing = require("../models/listing.js");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const maptoken = process.env.MAP_token;
const geocodingClient = mbxGeocoding({ accessToken: maptoken });


module.exports.index = async (req,res)=>{
    const allListing = await Listing.find({});
    res.render("listing/index.ejs", {allListing})
};

module.exports.renderNewForm = (req, res) => {
    res.render("listing/new.ejs");
};

module.exports.showListings = async (req,res)=>{
    const {id} = req.params;
  const data = await Listing.findById(id)
    .populate({
        path: "reviews",
        populate: {
            path: "author"
        }
    })
    .populate("owner");
    
    if (!data) {
        throw new ExpressError(404, "Listing not found");
    }
    
    res.render("listing/show.ejs", {data});
};

module.exports.createRoute = async (req,res, next)=>{

    let response = await geocodingClient
    .forwardGeocode({
        query: req.body.listing.location,
        limit: 1
    })
    .send();

console.log(response.body.features[0].geometry);

    if(!req.body.listing){
        throw new ExpressError(400, "send valid data for listings");
    }

    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};

    newListing.geometry =  response.body.features[0].geometry;

     await newListing.save();
    req.flash("success" , "New Listings is created");
    res.redirect(`/listings/${newListing._id}`);
}


//show edit form 
module.exports.editRoute =  async (req, res) => {
    let { id } = req.params;

    const data = await Listing.findById(id);
    res.render("listing/edit.ejs", { data });
};

//update route
module.exports.updateRoute = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findByIdAndUpdate(id, {
        ...req.body.listing
    });

    if(typeof req.file !== "undefined"){
    let url = req.file.path;
    let filename = req.file.filename;
    listing.image = {url, filename};
    }

    await listing.save();

    res.redirect(`/listings/${id}`);
};

//delete route
module.exports.deleteRoute = async (req,res)=>{
    let{id} = req.params;
    let deleteData =  await Listing.findByIdAndDelete(id);
    console.log(deleteData);
    req.flash("success" , " Listings is Deleted");
    res.redirect("/listings");
};
