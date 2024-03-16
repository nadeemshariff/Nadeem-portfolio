// import {} from 'sanity';

export const testimonials = {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string',
        },
        {
            name: 'imageurl',
            title: 'ImgURL',
            type: 'string',
            options: {
                hotspot: true,    //Crop feature 
            }
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string',
        },
    ],
}