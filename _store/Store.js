/*
  "repo": "Jody-Geers/simple-store",
  "description": "ikkle client-side store.",
*/


/**
 * Binds models to provider to create store
 * @param { array } args.models - available model defs
 * @param { array } args.provider - available provider
 * @return {Store} store - instantaneous client store
 * @access public
 */
function Store( args ) {

	var models = args.models;
	var provider = args.provider;
    
	// attach models to store then attach provider to Store and Instance
	for ( var modelsKey in models ) {

		var instance = new models[modelsKey]();
	
		for ( var providerKey in provider ) {
			
			models[modelsKey]['prototype'][providerKey] = provider[providerKey];
			
			models[modelsKey][providerKey] = provider[providerKey];
			
		}
        
		this[instance.meta.storeName] = models[modelsKey];
		
	}

};

module.exports = Store;
