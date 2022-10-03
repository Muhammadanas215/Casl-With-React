import { AbilityBuilder } from "@casl/ability";

export const abilityRules = (ability, role) => {
const {can, cannot, rules} = new AbilityBuilder()
if( role === 'Admin') {
    can('view', 'statistic')
    can('publish', 'product')
    can('edit', 'product')
    can('delete', 'product')
    cannot('buy', 'product')
}
else if(role === 'Manager'){
    can('view', 'statistic')
    can('publish', 'product')
    can('edit', 'product')
    can('delete', 'product')
    cannot('buy', 'product')
}
else if(role === 'User'){
    cannot('view', 'statistic')
    cannot('publish', 'product')
    cannot('edit', 'product')
    cannot('delete', 'product')
    can('buy', 'product')
}
else if(role === 'Guest' ){
    cannot('view', 'statistic');
    cannot('publish', 'product');
    cannot('edit', 'product');
    cannot('delete', 'product');
    cannot('buy', 'product');
}
ability.update(rules)
}