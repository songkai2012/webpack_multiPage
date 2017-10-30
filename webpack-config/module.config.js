module.exports = {
    rules:[
        {
            test:/\.js$/,
            //loader:'babel-loader',
            use:[
                {
                    loader: 'babel-loader',
                    options:{
                        presets:['env']
                    }
                }
            ],
        }
    ]
}