import { icon, library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { faIdCard } from '@fortawesome/free-regular-svg-icons';
library.add( faEnvelope, faIdCard, faKey, faUser, );

const icons = {
    profil: icon({prefix:"far", iconName:"id-card"}),
    user:icon({prefix:"fas", iconName:"user"}),
    envelope: icon({prefix:"fas", iconName:"envelope"}),
    key: icon({prefix:"fas", iconName:"key"})
};

export default icons;
