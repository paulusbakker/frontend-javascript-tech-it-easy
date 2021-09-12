function add(num1,num2) {
    return num1+num2
}


test("the add function adds 2 numbers", () => {
    // Arrange
    const number1 = 5;
    const number2 = 10;

    // Act
    const sum = add(number1, number2);

    // Assert
    expect(sum).toBe(15)


})