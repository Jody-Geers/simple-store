/*
  "repo": "Jody-Geers/simple-store",
  "description": "ikkle client-side store.",
*/


// here we define client / server storage - note: storeLocation in obj meta.
// just use an ajax request to get data from server. if needed of course. 
// args will have object filteres later used getting setting data


/**
 * get data
 * @return {array} || {obj}
 * @access public
 */
function get( args, cb ) {
  
    var Store = require( '../index.js' );
    var returnModelResultSet = [];
    
    // get data from source based off context model's meta storeLocation
    // NOTE: use ajax for server or localStorage for browser - this is dummy data
    var rawResultSet = require( './_dummy-data/' + this.name );

    // create model instance from raw data
    for ( var key in rawResultSet ) {
        returnModelResultSet.push( new Store[this.name]( rawResultSet[key] ) );
    }

    // return
    if ( cb )
        cb( returnModelResultSet );
    else
        return returnModelResultSet;

};

function save(args, cb) {
  // TODO: update if (id)? / else save new
  debugger;
};

function del(args, cb) {
  // TODO: delete
  debugger;
};


// make API public
module.exports.get = get;
module.exports.save = save;
module.exports.del = del;
