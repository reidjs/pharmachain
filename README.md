# PharmaChain. Medical Logistics Verified
Pharma Chain makes relations between health-manufacturers and health-care-providers more streamlined using Blockchain and Machine Learning.

1. [Intuitive UI using Material UI and Drag-Drop File Upload](#UI)

2. [Smart Contracts on the Ethereum Blockchain Ledger for Contract Management.](#bc)

3. [Recursive Neural Network to Predict Future Inventory.](#rnn)

# Implementation details

### <a name="rnn"></a>Intuitive UI 

### <a name="blockchain"></a>Smart Contracts on the Ethereum Blockchain Ledger for Contract Management between Manufacturer and Hospital.

PharmaChain decentralizes the money transfer between a pharmacy and the manufacturer. We do have an existing way of sending payments using the internet but the problem is they are very slow as they require a centralized cleaning house. Hospitals should not have to wait days to transfer large amounts of money and should not pay large transaction fees to send numerous micropayments to the manufacturer. Decentralized transactions are magnitudes faster without potential delay or waiting time. This helps in keeping the hospital stocked with its products and ready for all forms of emergencies and hence the hospital does not need to order in bulk or worry about large storage area. 
The transactions are also recorded on the blockchain which makes previous orders tamper-proof, permanently written and easily accessible by the manufacturer. 
When a manufacturer clicks on the button to Confirm Order, the order data is sent to the Manufacturer. Clicking on the button also sends the manufacturer the total cost of the supplies. Our prototype uses the Ethereum Blockchain to manage transactions and hence is able to use Ethereum as a currency.

### <a name="rnn"></a>Recursive Neural Network to Predict Future Inventory Requirements.
A neural network offers predictions for new situations after having been 'trained' on old data. Training requires a human to parse data and determine the correct answer for each data point. The human then trains a neural network by feeding it data, observing the input, and then adjusting the weights inside the matrix such that the output in more closely aligned with the correct answer. After doing this many times, and with many different inputs, the neural network can then output a correct prediction for a novel case.

In this particular instance of a neural network, previous input is CDC 'Fluview' data about flu outbreaks in the state of California, broken into the categories: Number of Patients, Precent Positive, and Number of Providers. The output of the neural network is the total Specimens Collected. From this datapoint, one can calculate the amount of supplies that a hospital might need to supply their facility for the upcoming flu season.

This specific instance of a neural network is a recursive neural network, which directly relies on the result of previous data inputs to predict future inputs. A keras model run on top of Tensorflow GPU processing library to make predictions.

````python 
model = Sequential()

model.add(LSTM(hidden_dim, input_shape=(time_step, feature_dim),  
return_sequences = False))

model.add(Dense(100, activation='softmax'))

model.compile(loss = 'mean_squared_error', optimizer = 'rmsprop', metrics = ['accuracy'])

model.fit(x_train, y_test, num_epochs, num_batch, validation_data = (x_test, y_test))
````

# Future Implementations
