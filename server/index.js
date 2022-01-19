const express = require('express');
const app = express();
const path = require('path');
const cors = require("cors");
const axios = require('axios').default;


app.use(cors());
app.use(express.json());

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/main.html'))
});

app.get('/css', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/main.css'))
  });

app.get('/js', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/main.js'))
});


app.get('/picture1', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/images/HEADER1.png'))
});

app.get('/picture2', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/images/main-tool.png'))
});


let id = 4;

const rentals = [
    {
        "id": 1,
        "name": "Joe Guy",
        "typetool": "#2 Yellow and Gray Phillips",
        "returns": "Will return 01/03/2021",
        "image": "ttps://www.roadprobrands.com/Admin/GetImage.ashx?Image=/Files/Files/RoadPro/Products/RPS1013.jpg&Width=800&Height=800&altFmImage_path=/Files/Templates/Designs/RoadPro/images/no-image.jpg&Crop=5",
        
    },
    {
        "id": 2,
        "name": "Jake from State Farm",
        "typetool": "#3 Flat Head Screwdriver", 
        "returns": "Might not Return",
        "image": "https://img.misterworker.com/en/55793-thickbox_default/screwdriver-essential-standard-blade-6-pcs.jpg",
    },
    {
        "id": 3,
        "name": "Kate",
        "typetool": "Bit driver", 
        "returns": "05/20/2023",
        "image": "https://www.stanleytools.com/NA/product/images/3000x3000x96/STHT60083/STHT60083_1.jpg",
        
    },
    {
        "id": 4,
        "name": "Joe Guy",
        "typetool": "3/8 & 1/4 drive Socket Set",
        "returns": "Will return 07/23/2021",
        "image": "https://m.media-amazon.com/images/I/71OptJqBCuL._AC_SL1500_.jpg",
        
    },
    {
        "id": 5,
        "name": "Jake from State Farm",
        "typetool": "1/4 drive", 
        "returns": "Might not Return",
        "image": "http://cdn.shopify.com/s/files/1/0544/8856/3895/products/MR100SPA.jpg?v=1633799186",
    },
    {
        "id": 6,
        "name": "Kate",
        "typetool": "Medium 3/8", 
        "returns": "05/20/2023",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl_7V15qfQ_L_KOqkUWp-48ZPnHuu-Dkm9cBla9GCoHxc2VrbO2qYiAPq1LAmgAM8kCWI&usqp=CAU",
        
    },
    {
        "id": 7,
        "name": "Joe Guy",
        "typetool": "Needle Nose",
        "returns": "Will return 01/03/2021",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl_7V15qfQ_L_KOqkUWp-48ZPnHuu-Dkm9cBla9GCoHxc2VrbO2qYiAPq1LAmgAM8kCWI&usqp=CAU",
        
    },
    {
        "id": 8,
        "name": "Jake from State Farm",
        "typetool": "#3 Flat Head Screwdriver", 
        "returns": "Might not Return",
        "image": "https://img.misterworker.com/en/55793-thickbox_default/screwdriver-essential-standard-blade-6-pcs.jpg",
    },
    {
        "id": 9,
        "name": "Kate",
        "typetool": "N/A", 
        "returns": "05/20/2023",
        "image": "https://www.stanleytools.com/NA/product/images/3000x3000x96/STHT60083/STHT60083_1.jpg",
        
    },
    {
        "id": 10,
        "name": "Joe Guy",
        "typetool": "Medium Sized 12inch Crescent",
        "returns": "Will return 01/03/2021",
        "image": "https://www.roadprobrands.com/Admin/GetImage.ashx?Image=/Files/Files/RoadPro/Products/RPS1013.jpg&Width=800&Height=800&altFmImage_path=/Files/Templates/Designs/RoadPro/images/no-image.jpg&Crop=5",
        
    },
    {
        "id": 11,
        "name": "Jake from State Farm",
        "typetool": "#3 Flat Head Screwdriver", 
        "returns": "Might not Return",
        "image": "https://img.misterworker.com/en/55793-thickbox_default/screwdriver-essential-standard-blade-6-pcs.jpg",
    },
    {
        "id": 12,
        "name": "Kate",
        "typetool": "N/A", 
        "returns": "05/20/2023",
        "image": "https://www.stanleytools.com/NA/product/images/3000x3000x96/STHT60083/STHT60083_1.jpg",
        
    },
    {
        "id": 13,
        "name": "Joe Guy",
        "typetool": "Medium Sized 12inch Crescent",
        "returns": "Will return 01/03/2021",
        "image": "https://www.roadprobrands.com/Admin/GetImage.ashx?Image=/Files/Files/RoadPro/Products/RPS1013.jpg&Width=800&Height=800&altFmImage_path=/Files/Templates/Designs/RoadPro/images/no-image.jpg&Crop=5",
        
    },
    {
        "id": 14,
        "name": "Jake from State Farm",
        "typetool": "#3 Flat Head Screwdriver", 
        "returns": "Might not Return",
        "image": "https://img.misterworker.com/en/55793-thickbox_default/screwdriver-essential-standard-blade-6-pcs.jpg",
    },
    {
        "id": 15,
        "name": "Kate",
        "typetool": "N/A", 
        "returns": "05/20/2023",
        "image": "https://www.stanleytools.com/NA/product/images/3000x3000x96/STHT60083/STHT60083_1.jpg",
        
    },
    {
        "id": 16,
        "name": "Joe Guy",
        "typetool": "Medium Sized 12inch Crescent",
        "returns": "Will return 01/03/2021",
        "image": "https://www.roadprobrands.com/Admin/GetImage.ashx?Image=/Files/Files/RoadPro/Products/RPS1013.jpg&Width=800&Height=800&altFmImage_path=/Files/Templates/Designs/RoadPro/images/no-image.jpg&Crop=5",
        
    },
    {
        "id": 17,
        "name": "Jake from State Farm",
        "typetool": "#3 Flat Head Screwdriver", 
        "returns": "Might not Return",
        "image": "https://img.misterworker.com/en/55793-thickbox_default/screwdriver-essential-standard-blade-6-pcs.jpg",
    },
    {
        "id": 18,
        "name": "Kate",
        "typetool": "N/A", 
        "returns": "05/20/2023",
        "image": "https://www.stanleytools.com/NA/product/images/3000x3000x96/STHT60083/STHT60083_1.jpg",
        
    },
    {
        "id": 19,
        "name": "Joe Guy",
        "typetool": "Medium Sized 12inch Crescent",
        "returns": "Will return 01/03/2021",
        "image": "https://www.roadprobrands.com/Admin/GetImage.ashx?Image=/Files/Files/RoadPro/Products/RPS1013.jpg&Width=800&Height=800&altFmImage_path=/Files/Templates/Designs/RoadPro/images/no-image.jpg&Crop=5",
        
    },
    {
        "id": 20,
        "name": "Jake from State Farm",
        "typetool": "#3 Flat Head Screwdriver", 
        "returns": "Might not Return",
        "image": "https://img.misterworker.com/en/55793-thickbox_default/screwdriver-essential-standard-blade-6-pcs.jpg",
    },
    {
        "id": 21,
        "name": "Kate",
        "typetool": "Wire Cutters", 
        "returns": "05/20/2023",
        "image": "https://www.stanleytools.com/NA/product/images/3000x3000x96/STHT60083/STHT60083_1.jpg",
        
    }   
]

app.get('/tools', (req, res) => {
    res.status(200).send(rentals)
});

app.delete('/tools/:id', (req, res) => {

    const { id } = req.params;

    const tgtIndex = rentals.findIndex(function(entryObj) {
        return entryObj.id === parseInt(id); 
    })

    if (tgtIndex === -1) {
        res.status(404).send('Entry not found')
    } else {
        rentals.splice(tgtIndex, 1);
        res.status(200).send(rentals);
    }
});

app.post('/tools', (req, res) => {
    console.log('test')
    const { name, typetool, returns, image } = req.body;

    const newEntry = {
        id,
        name,
        typetool,
        image,
        returns,
        
    }

    id++
    rentals.push(newEntry)
    res.status(200).send(rentals)

});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));