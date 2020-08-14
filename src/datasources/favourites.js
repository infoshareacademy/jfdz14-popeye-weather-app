import {firebase} from '../firebase';

const db = firebase.firestore();
export function getFavourites() {
    return db.collection('favourites').get()
        .then(querySnapshot => {
            return querySnapshot.docs.map(x => x.data());
        });
}

export function isFavourite(long, lat) {
    return db.collection('favourites')
        .where('long', '==', long)
        .where('lat', '==', lat)
        .get()
        .then(x => {
            return x.size >= 1;
        });
}

export function toggleFavourites(state, long, lat, name) {
    return db.collection('favourites')
        .where('long', '==', long)
        .where('lat', '==', lat)
        .get()
        .then(result => {

            if (state) {
                if (result.size === 0) {
                    return db.collection('favourites').doc().set({
                        name,
                        long,
                        lat
                    });
                }
            } else {
                if (result.size >= 1) {
                    return db.collection('favourites').doc(result.docs[0].id)
                        .delete()
                        .then(x => undefined);
                }
            }
        });
}