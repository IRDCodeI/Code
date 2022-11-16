import pandas as pd
import numpy as np
import plotly.graph_objs as go

from plotly.offline import plot

x = np.array([2, 6, 8, 8, 12, 16, 20, 20, 22, 26])
y = np.array([58, 105, 88, 118, 117, 137, 157, 169, 149, 202])

trace = go.Scatter(x = x, y = y, mode = 'markers')
data = [trace]

plot(data)