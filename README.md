# PharmaChain. Medical Logistics Verified
Pharma Chain makes relations between health-manufacturers and health-care-providers more streamlined using Blockchain and Machine Learning.

1. [Intuitive UI using Material UI and Drag-Drop File Upload](#UI)

2. [Smart Contracts on the Ethereum Blockchain Ledger for Contract Management.](#bc)

3. [Recursive Neural Network to Predict Future Inventory.](#rnn)

# Implementation details

## Background
PharmaChain is a predictive medical inventory platform powered by blockchain.

Healthcare supply chain is a $2.3 billion global market, but there are inefficiencies inherent to how it works today. It's expensive, complex, and many problems are present in inventory management.

Not only is supply chain a hospital's greatest expense, a study showed that hospitals could save $9.9 million per year by optimizing the process. In addition, the wait time between fund exchanges, along with transaction fees, can be quite high.

Typically, hospitals work with a third party distributor to order products. The process looks simple from the outside, but's a fragmented process involving stakeholders for compliance, including manufacturers, insurance companies, hospitals, healthcare providers, group purchasing organizations, and regulatory agencies.

Once products arrive at the healthcare organization, there are inventory problems that can arise. Hospitals hold $1 million USD of inventory at any one time, but waste is created if products expire or clinicians want to use different products.

We aim to solve these problems with the PharmaChain platform.

# Solution
PharmaChain predicts the inventory that a healthcare provider will require within a timeframe using machine learning algorithms. The prediction is based on both in-house inventory and outside events, including health outbreaks or disaster events.

This platform's compliance complexity is resolved using blockchain. Any stakeholder can check the blockchain to ensure compliance with legal and healthcare requirements.

PharmaChainAnother transactional benefit of PharmaChain is that it decentralizes the money transfer between a pharmacy and the manufacturer. We do have an existing way of sending payments using the internet but the problem is they are very slow as they require a centralized cleaning house. Hospitals should not have to wait days to transfer large amounts of money and should not pay large transaction fees to send numerous micropayments to the manufacturer. Decentralized transactions are magnitudes faster without potential delay or waiting time. This helps in keeping the hospital stocked with its products and ready for all forms of emergencies and hence the hospital does not need to order in bulk or worry about large storage area. The transactions are also recorded on the blockchain which makes previous orders tamper-proof, permanently written and easily accessible by the manufacturer. When a manufacturer clicks on the button to Confirm Order, the order data is sent to the Manufacturer. Clicking on the button also sends the manufacturer the total cost of the supplies. Our prototype uses the Ethereum Blockchain to manage transactions and hence is able to use Ethereum as a currency.

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

We're adding features that will summarize data and help healthcare organizations and manufacturers organize inventory.

For healthcare providers, we're:

Compiling trend data, with the ability to filter
Showing cost per unit and other prices for products
Creating an updates module for order updates, sourced from the blockchain
For manufacturers:

Dashboard of recent and historical orders, with the ability to filter
Converting from USD to ETH and back
Account summary with current balance
