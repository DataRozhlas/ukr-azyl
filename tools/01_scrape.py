# %%
import pandas as pd
import json
import numpy as np
from datetime import datetime
# %%
d = pd.read_excel('https://www.mvcr.cz/soubor/strpeni-ukr-k-' + datetime.now().strftime('%d-%m-%Y') + '-xlsx.aspx')
# %%
def np_encoder(object):
    if isinstance(object, np.generic):
        return object.item()
# %%
# deti, dospeli, seniori
d.dropna(subset=['kraj'], inplace=True)

# %%
vek = {
    'deti_z': d.z_do_3.sum() + d.z_do_6.sum() + d.z_do_15.sum() + d.z_do_18.sum(),
    'deti_m': d.m_do_3.sum() + d.m_do_6.sum() + d.m_do_15.sum() + d.m_do_18.sum(),
    'deti_x': d.x_do_3.sum() + d.x_do_6.sum() + d.x_do_15.sum() + d.x_do_18.sum(),
    'dosp_z': d.z_do_65.sum(),
    'dosp_m': d.m_do_65.sum(),
    'dosp_x': d.x_do_65.sum(),
    'sen_z': d.z_sen.sum(),
    'sen_m': d.m_sen.sum(),
    'sen_x': d.x_sen.sum(),
    'upd': datetime.now().strftime('%Y-%m-%d'),
}

# %%
with open('../data_age.json', 'w') as f:
    f.write(json.dumps(vek, default=np_encoder))

# %%
vek
# %%
datetime.now().strftime('%Y-%m-%d')
# %%
