// Interface for the JSON Objects retrieved from https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1329

export interface Item {
    body: string;
    category: string;
    title: string;
    keywords: string;
}
