public class BooleanAlgebraProof {
    public static void main(String[] args) {
        boolean[] values = {false, true};

        System.out.println("Truth Table for: x ∨ (~x ∧ y) = x ∨ y\n");
        System.out.println("x\t y\t ~x\t ~x∧y\t x∨(~x∧y)\t x∨y\t Equal?");
        System.out.println("-------------------------------------------------------------");

        for (boolean x : values) {
            for (boolean y : values) {
                boolean notX = !x;
                boolean notXandY = notX && y;
                boolean leftSide = x || notXandY;
                boolean rightSide = x || y;
                boolean isEqual = (leftSide == rightSide);

                System.out.printf("%s\t %s\t %s\t %s\t     %s\t     %s\t   %s\n",
                        x, y, notX, notXandY, leftSide, rightSide, isEqual);
            }
        }
    }
}
