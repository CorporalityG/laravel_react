<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddGradeTypeToProjectBudgetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('project_budgets', function (Blueprint $table) {
            $table->after('currency', function ($table)
            {
                $table->string('grade_type_1')->nullable();
            });
            $table->after('price_grade_1', function ($table)
            {
                $table->json('total_price_grade_1')->nullable();
            });

            $table->after('total_price_grade_1', function ($table)
            {
                $table->string('grade_type_2')->nullable();
            });
            $table->after('price_grade_2', function ($table)
            {
                $table->json('total_price_grade_2')->nullable();
            });

            $table->after('total_price_grade_2', function ($table)
            {
                $table->string('grade_type_3')->nullable();
            });
            $table->after('price_grade_3', function ($table)
            {
                $table->json('total_price_grade_3')->nullable();
            });

            $table->after('total_price_grade_3', function ($table)
            {
                $table->string('grade_type_4')->nullable();
            });
            $table->after('price_grade_4', function ($table)
            {
                $table->json('total_price_grade_4')->nullable();
            });
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('project_budgets', function (Blueprint $table) {
            $table->dropColumn('grade_type_1');
            $table->dropColumn('total_price_grade_1');

            $table->dropColumn('grade_type_2');
            $table->dropColumn('total_price_grade_2');

            $table->dropColumn('grade_type_3');
            $table->dropColumn('total_price_grade_3');

            $table->dropColumn('grade_type_4');
            $table->dropColumn('total_price_grade_4');
        });
    }
}
