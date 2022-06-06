const filter = []
const current_bund = []
const all_bund = ['fighter_bund', 'marksman_bund', 'assasin_bund', 'mage_bund', 'tank_bund', 'support_bund']

const stats_template = {
    ad : "Attack Damage: ",
    crit : "Critical Strike Chance: ",
    as : "Attack Speed: ",
    armor_pen : "Armor Penetration: ",
    lethality : "Lethality: ",
    ap : "Ability Power: ",
    mana : "Mana: ",
    magic_pen : "Magic Penetration: ",
    hp : "Health: ",
    armor : "Armor: ",
    mr : "Magic Resist: ",
    haste : "Ability Haste: ",
    mana_regen : "Mana Regeneration: ",
    ms : "Move Speed: ",
    omnivamp : "Omnivamp: ",
}

const fighter_bund = ['eclipse', 'goredrinker', 'stridebreaker', 'divine_sunderer', 'trinity_force']

const marksman_bund = ['trinity_force', 'galeforce', 'kraken_slayer', 'immortal_shieldbow']

const assasin_bund = ['duskblade_of_draktharr', 'eclipse', 'prowlers_claw']

const mage_bund = ['crown_of_the_shattered_queen', 'everfrost', 'hextech_rocketbelt', 'riftmaker', 'night_harvester', 
'liandrys_anguish', 'ludens_tempest']

const tank_bund = ['shurelyas_battlesong', 'locket_of_the_iron_solari', 'frostfire_gaunlet', 'turbo_chemtank', 
'sunfire_aegis']

const support_bund = ['shurelyas_battlesong', 'evenshroud', 'locket_of_the_iron_solari', 'imperial_mandate', 'moonstone_renewer']